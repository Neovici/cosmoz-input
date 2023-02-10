import { useEffect, useMemo } from 'haunted';
import { BaseInput } from './use-input';

const autoheight = (input: HTMLElement) => {
	input.style.height = '';
	input.style.height = `${input.scrollHeight}px`;
};

const limit = (input: HTMLElement, maxRows = 0) => {
	if (maxRows > 0) {
		const rows = input.getAttribute('rows') ?? '',
			height = input.style.height;
		input.style.height = '';
		input.setAttribute('rows', maxRows as unknown as string);
		input.style.maxHeight = input.getBoundingClientRect().height + 'px';
		input.style.height = height;
		input.setAttribute('rows', rows);
	}
};

export const useAutoHeight = <T extends BaseInput>(host: T) => {
	const { value, maxRows } = host,
		input = useMemo(
			() => () =>
				(host.shadowRoot as ShadowRoot).querySelector('#input') as HTMLElement,
			[]
		);
	useEffect(() => limit(input(), maxRows), [maxRows, input]);
	useEffect(() => autoheight(input()), [input, value]);
	useEffect(() => {
		const el = input(),
			observer = new ResizeObserver(() =>
				requestAnimationFrame(() => autoheight(el))
			);
		observer.observe(el);
		return () => observer.unobserve(el);
	}, [input]);
};
