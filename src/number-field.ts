import { minusIcon, plusIcon } from '@neovici/cosmoz-icons/untitled';
import { FormControlElement } from '@neovici/cosmoz-utils/elements/form-control-element';
import { useFormValue } from '@neovici/cosmoz-utils/hooks/use-form-value';
import {
	component,
	css,
	html,
	sheet,
	useMemo,
	useProperty,
	useRef,
	useState,
} from '@pionjs/pion';
import { t } from 'i18next';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { live } from 'lit-html/directives/live.js';

import { allowedCharacters, formatNumber, parseNumber } from './number-format';
import { Render, render } from './render';
import { styles } from './styles';
import { usePressAndHold } from './use-press-and-hold';
import { getPlaceholder } from './util';

export interface NumberFieldElement extends FormControlElement, Render {
	value?: number | null;
	min?: number;
	max?: number;
	/** ArrowUp/ArrowDown and the buttons. Default 1. */
	step?: number;
	/** Shift+Arrow, PageUp/PageDown. Default 10 × `step`. */
	largeStep?: number;
	/** Alt+Arrow. Default 0.1 × `step`. */
	smallStep?: number;
	/** `Intl.NumberFormat` options, e.g. `{ style: 'currency', currency: 'SEK' }`. */
	format?: Intl.NumberFormatOptions;
	/** BCP 47 tag; the browser's locale by default. */
	locale?: string;
	placeholder?: string;
	readonly?: boolean;
	disabled?: boolean;
}

type Direction = 1 | -1;

// attributes arrive as strings, an empty attribute as `true`
const num = (v: unknown) =>
	(typeof v === 'number' || (typeof v === 'string' && v.trim() !== '')) &&
	Number.isFinite(Number(v))
		? Number(v)
		: undefined;

// binary noise from stepping, e.g. 0.1 + 0.2
const round = (n: number) => parseFloat(n.toPrecision(15));

const rounds = (format?: Intl.NumberFormatOptions) =>
	format?.maximumFractionDigits != null ||
	format?.minimumFractionDigits != null ||
	format?.maximumSignificantDigits != null ||
	format?.minimumSignificantDigits != null;

// the iOS decimal keypad has no minus key
const ios =
	/iP(hone|od|ad)/u.test(navigator.userAgent) ||
	(/Mac/u.test(navigator.userAgent) && navigator.maxTouchPoints > 1);

const KEY_DIRECTION: Record<string, Direction> = {
	ArrowUp: 1,
	PageUp: 1,
	ArrowDown: -1,
	PageDown: -1,
};

/**
 * Range validity for the form, with the browser's localized messages: a
 * detached native number input does the checking.
 */
const useRangeValidity = (value: number | null, min?: number, max?: number) => {
	const native = useMemo(
		() =>
			Object.assign(document.createElement('input'), {
				type: 'number',
				step: 'any',
			}),
		[],
	);
	Object.assign(native, { min: min ?? '', max: max ?? '', value: value ?? '' });
	const { rangeUnderflow, rangeOverflow } = native.validity;
	return {
		flags: { rangeUnderflow, rangeOverflow },
		message: native.validationMessage,
	};
};

const NumberField = (host: NumberFieldElement) => {
	const { locale, format, readonly, required, invalid } = host,
		min = num(host.min),
		max = num(host.max),
		step = num(host.step) ?? 1,
		largeStep = num(host.largeStep) ?? step * 10,
		smallStep = num(host.smallStep) ?? step / 10,
		negative = min == null || min < 0,
		[rawValue, setValue] = useProperty<number | string | null>('value'),
		value = num(rawValue) ?? null,
		[initial] = useState(value),
		// the text while the user types; undefined shows the formatted value
		draft = useRef<string | undefined>(undefined),
		[, rerender] = useState(0),
		isAllowed = useMemo(
			() => allowedCharacters(locale, format, negative),
			[locale, JSON.stringify(format), negative],
		);

	const parse = (text: string) => parseNumber(text, locale, format),
		// host.value rather than the render's value, so presses and keys
		// within one frame add up
		current = () => num(host.value) ?? null,
		// with explicit rounding options the value is what the field shows,
		// as in Base UI
		toFormat = <T extends number | null>(n: T): T =>
			n != null && rounds(format)
				? ((parse(formatNumber(n, locale, format)) ?? n) as T)
				: n,
		commit = (n: number | null, clamp = true) => {
			const next =
				n == null || !clamp
					? n
					: Math.min(max ?? Infinity, Math.max(min ?? -Infinity, n));
			if (Object.is(next, current())) return false;
			setValue(next);
			return true;
		},
		settle = () => {
			draft.current = undefined;
			rerender((n) => n + 1);
		},
		// typing commits as it goes; leaving shows the committed value
		finish = () => {
			if (draft.current == null) return;
			commit(toFormat(current()));
			settle();
		},
		stepBy = (direction: Direction, amount: number) => {
			const base = current();
			settle();
			return commit(
				base == null ? 0 : toFormat(round(base + direction * amount)),
			);
		},
		amountOf = (e: MouseEvent | KeyboardEvent) => {
			if (e.altKey) return smallStep;
			if (e.shiftKey) return largeStep;
			return step;
		};

	const { disabled: formDisabled } = useFormValue({
			value: value == null ? null : String(value),
			required,
			validity: useRangeValidity(value, min, max),
			onReset: () => {
				commit(num(host.getAttribute('value')) ?? initial, false);
				settle();
			},
			onRestore: (state) =>
				typeof state === 'string' && commit(num(state) ?? null, false),
		}),
		disabled = !!host.disabled || formDisabled,
		inert = disabled || !!readonly,
		pressAndHold = usePressAndHold(
			(direction, e) => stepBy(direction, amountOf(e)),
			inert,
			() => {
				const input = host.shadowRoot!.querySelector('input')!;
				input.focus();
				input.setSelectionRange(input.value.length, input.value.length);
			},
		);

	const onBeforeInput = (e: InputEvent) => {
			const data = e.data ?? e.dataTransfer?.getData('text/plain');
			if (data && !Array.from(data).every(isAllowed)) e.preventDefault();
		},
		onInput = (e: InputEvent) => {
			const text = (e.target as HTMLInputElement).value;
			draft.current = text;
			if (text.trim() === '') return commit(null);
			const parsed = parse(text);
			if (parsed != null) commit(parsed);
		},
		onKeyDown = (e: KeyboardEvent) => {
			// keyCode 229: IME composition, where isComposing is unreliable in Safari
			const composing = e.isComposing || e.keyCode === 229;
			if (e.defaultPrevented || inert || composing) return;
			if (e.key === 'Enter') return finish();
			const direction = KEY_DIRECTION[e.key];
			if (direction) {
				e.preventDefault();
				const page = e.key.startsWith('Page');
				return stepBy(direction, page ? largeStep : amountOf(e));
			}
			const boundary = { Home: min, End: max }[e.key];
			if (boundary != null) {
				e.preventDefault();
				settle();
				commit(boundary);
			}
		};

	host.toggleAttribute('has-value', value != null);
	host.toggleAttribute('data-disabled', disabled);
	host.toggleAttribute('data-readonly', !!readonly);
	host.toggleAttribute('data-required', !!required);
	host.toggleAttribute('data-invalid', !!invalid);

	const stepper = (direction: Direction) => {
		const up = direction > 0,
			atBoundary =
				value != null &&
				(up ? value >= (max ?? Infinity) : value <= (min ?? -Infinity)),
			handlers = pressAndHold(direction);
		return html`<button
			type="button"
			class="stepper"
			part="button ${up ? 'increment' : 'decrement'}"
			tabindex="-1"
			aria-label=${up ? t('Increase') : t('Decrease')}
			aria-controls="input"
			?disabled=${inert || atBoundary}
			@pointerdown=${handlers.onPointerDown}
			@pointermove=${handlers.onPointerMove}
			@pointerup=${handlers.onPointerUp}
			@pointercancel=${handlers.onPointerUp}
			@click=${handlers.onClick}
		>
			${(up ? plusIcon : minusIcon)({ width: '16', height: '16' })}
		</button>`;
	};

	return render(
		html`<input
				id="input"
				part="input"
				type="text"
				inputmode=${ios && negative ? 'text' : 'decimal'}
				enterkeyhint="done"
				autocomplete="off"
				autocorrect="off"
				spellcheck="false"
				aria-roledescription=${t('Number field')}
				aria-invalid=${ifDefined(invalid ? 'true' : undefined)}
				placeholder=${getPlaceholder({ placeholder: host.placeholder })}
				?readonly=${readonly}
				?disabled=${disabled}
				?required=${required}
				.value=${live(draft.current ?? formatNumber(value, locale, format))}
				@beforeinput=${onBeforeInput}
				@input=${onInput}
				@keydown=${onKeyDown}
				@blur=${finish}
			/>${stepper(-1)}${stepper(1)}`,
		host,
	);
};

const numberFieldStyles = css`
	/* the steppers sit at the end of the wrap, after the suffix slot */
	.control {
		display: contents;
	}

	#input {
		flex: 1;
		min-width: 0;
		font-variant-numeric: tabular-nums;
	}

	.stepper {
		order: 1;
		flex: none;
		align-self: stretch;
		display: grid;
		place-items: center;
		width: var(--control-height);
		padding: 0;
		border: 0;
		border-inline-start: 1px solid var(--cz-color-border-primary);
		background: none;
		color: var(--cz-color-fg-quaternary);
		cursor: pointer;
		touch-action: manipulation;
		user-select: none;
		-webkit-user-select: none;
		-webkit-touch-callout: none;
	}

	@media (hover: hover) {
		.stepper:hover:not(:disabled) {
			background: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-fg-quaternary-hover);
		}
	}

	.stepper:active:not(:disabled) {
		background: var(--cz-color-bg-primary-hover);
	}

	.stepper:disabled {
		color: var(--cz-color-fg-disabled-subtle);
		cursor: not-allowed;
	}

	/* also disabled by a fieldset, which sets no attribute */
	:host([data-disabled]) .wrap {
		color: var(--cz-color-text-disabled);
		background: var(--cz-color-bg-disabled-subtle);
		box-shadow: inset 0 0 0 1px var(--cz-color-border-disabled);
		cursor: not-allowed;
	}

	:host([data-disabled]) #input {
		color: var(--cz-color-text-disabled);
		cursor: not-allowed;
	}

	@media (pointer: coarse) {
		:host {
			--control-height: 2.75rem;
		}
	}
`;

customElements.define(
	'cosmoz-number-field',
	component<NumberFieldElement>(NumberField, {
		baseElement: FormControlElement,
		observedAttributes: [
			'value',
			'min',
			'max',
			'step',
			'large-step',
			'small-step',
			'locale',
			'label',
			'hint',
			'placeholder',
			'compact',
			'required',
			'readonly',
			'disabled',
			'invalid',
		],
		styleSheets: [sheet(styles), numberFieldStyles],
		shadowRootInit: { mode: 'open', delegatesFocus: true },
	}),
);

declare global {
	interface HTMLElementTagNameMap {
		'cosmoz-number-field': NumberFieldElement;
	}
}
