type Locale = string | undefined;
type Format = Intl.NumberFormatOptions | undefined;

const formatters = new Map<string, Intl.NumberFormat>();

const formatter = (locale: Locale, format: Format) => {
	const key = `${locale}|${JSON.stringify(format)}`;
	let f = formatters.get(key);
	if (!f) formatters.set(key, (f = new Intl.NumberFormat(locale, format)));
	return f;
};

export const formatNumber = (
	value: number | null,
	locale: Locale,
	format: Format,
) => (value == null ? '' : formatter(locale, format).format(value));

const MINUS = /[-−－‒–—﹣]/gu,
	PLUS = /[+＋﹢]/gu,
	SPACE = /\p{Zs}/u,
	CONTROL = /\p{Cf}/gu,
	FULLWIDTH_DIGIT = /[０-９]/gu;

const symbols = (locale: Locale, format: Format) => {
	const parts = formatter(locale, format).formatToParts(-11111.1),
		part = (type: string) => parts.find((p) => p.type === type)?.value,
		plain = formatter(locale, { useGrouping: false });
	return {
		group: part('group'),
		// integer formats omit it, so take it from the plain locale format
		decimal:
			formatter(locale, undefined)
				.formatToParts(0.1)
				.find((p) => p.type === 'decimal')?.value ?? '.',
		digits: Array.from({ length: 10 }, (_, d) => plain.format(d)),
		affixes: parts
			.filter((p) =>
				['currency', 'percentSign', 'unit', 'literal'].includes(p.type),
			)
			.map((p) => p.value.trim())
			.filter(Boolean),
	};
};

const percent = (text: string, format: Format) =>
	format?.style === 'percent' || /[%٪％﹪]/u.test(text);

/**
 * Parses what the user typed in the field's locale and format: group
 * separators, the locale's decimal separator, currency, unit and percent
 * signs, localized digits and Unicode minus signs. `.` is also accepted as
 * the decimal point where it isn't the group separator (e.g. `1.5` in
 * Swedish); when several remain, the last one is.
 */
export const parseNumber = (
	text: string,
	locale: Locale,
	format: Format,
): number | null => {
	const { group, decimal, digits, affixes } = symbols(locale, format);
	let s = text.replace(CONTROL, '');
	affixes.forEach((affix) => (s = s.split(affix).join('')));
	s = s.replace(/\p{Zs}/gu, '');
	if (group && !SPACE.test(group)) s = s.split(group).join('');
	if (group === '’') s = s.replace(/'/gu, '');
	s = s
		.split(decimal)
		.join('.')
		.replace(/./gu, (ch) => {
			const d = digits.indexOf(ch);
			return d === -1 ? ch : String(d);
		})
		.replace(FULLWIDTH_DIGIT, (ch) => String(ch.charCodeAt(0) - 0xff10))
		.replace(MINUS, '-')
		.replace(PLUS, '');

	// accounting formats wrap negatives in parentheses
	const negative = /^-|-$/u.test(s) || /^\(.*\)$/u.test(text.trim());
	s = s.replace(/^-|-$/u, '');
	const dot = s.lastIndexOf('.');
	if (dot !== -1) {
		s = s.slice(0, dot).replace(/\./gu, '') + '.' + s.slice(dot + 1);
	}
	if (!/^\d*\.?\d*$/u.test(s) || !/\d/u.test(s)) return null;

	const n = Number(
		`${negative ? '-' : ''}${s}${percent(text, format) ? 'e-2' : ''}`,
	);
	return Number.isFinite(n) ? n : null;
};

/** Characters the user may type: digits, separators, signs and the format's symbols. */
export const allowedCharacters = (
	locale: Locale,
	format: Format,
	negative: boolean,
) => {
	const { group, decimal, digits, affixes } = symbols(locale, format),
		chars = new Set([
			...'0123456789０１２３４５６７８９.,+＋﹢',
			...digits,
			decimal,
			...(group ?? ''),
			...affixes.join(''),
			...(format?.style === 'percent' ? '%٪％﹪' : ''),
			...(negative ? '-−－‒–—﹣' : ''),
		]);
	return (ch: string) => chars.has(ch) || SPACE.test(ch) || /\p{Cf}/u.test(ch);
};
