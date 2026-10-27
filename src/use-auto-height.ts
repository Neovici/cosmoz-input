import { useEffect, useMemo } from '@pionjs/pion';
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
		// clear any previous cap so it can't leak into the measurement
		// (e.g. a stale max-height: 0px after being rendered hidden)
		input.style.maxHeight = '';
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
				requestAnimationFrame(() => {
					// read maxRows off the host at call time so props set after
					// mount are picked up on visibility/size changes
					limit(el, host.maxRows);
					autoheight(el);
				})
			);
		observer.observe(el);
		return () => observer.unobserve(el);
	}, [input]);
};
