import { useCallback, useEffect, useMemo } from 'haunted';
import { useImperativeApi } from '@neovici/cosmoz-utils/hooks/use-imperative-api';
import { notifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';

export interface BaseInput extends HTMLElement {
	value?: string | number;
	maxRows?: number;
	focused?: boolean;
}
// TODO:  use useRef instead of callback with querySelector
export const useInput = <T extends BaseInput>(host: T) => {
		const root = host.shadowRoot as ShadowRoot,
			onChange = useCallback(
				(e: Event) =>
					host.dispatchEvent(new Event(e.type, { bubbles: e.bubbles })),
				[]
			),
			onInput = useCallback(
				(e: InputEvent) =>
					notifyProperty(host, 'value', (e.target as HTMLInputElement).value),
				[]
			),
			onFocus = useCallback(
				(e: FocusEvent) => notifyProperty(host, 'focused', e.type === 'focus'),
				[]
			),
			focus = useCallback(
				() => (root.querySelector('#input') as HTMLInputElement)?.focus(),
				[]
			),
			validate = useCallback(() => {
				const valid = (
					root.querySelector('#input') as HTMLInputElement
				)?.checkValidity();
				host.toggleAttribute('invalid', !valid);
				return valid;
			}, []);

		useImperativeApi({ focus, validate }, [focus, validate]);

		useEffect(() => {
			const onMouseDown = <T extends Event>(e: T) => {
				const element = document.querySelector('#input[part="input"]') as HTMLInputElement | null;
				if (
					e.defaultPrevented ||
					(e.target as HTMLElement).matches('input, textarea, label') ||
					element?.disabled
				) {
					return;
				}
				e.preventDefault(); // don't blur
				if (!host.matches(':focus-within')) {
					// if input not focused
					focus(); // focus input
				}
			};

			root.addEventListener('mousedown', onMouseDown);
			return () => root.removeEventListener('mousedown', onMouseDown);
		}, [focus]);

		return {
			onChange,
			onFocus,
			onInput,
		};
	},
	useAllowedPattern = (allowedPattern: string | RegExp) =>
		useMemo(() => {
			if (allowedPattern == null) {
				return;
			}
			const regexp = new RegExp(allowedPattern, 'u');
			return <T extends InputEvent>(e: T) => {
				if (!e.defaultPrevented && e.data && !regexp.test(e.data)) {
					e.preventDefault();
				}
			};
		}, [allowedPattern]),
	autosize = (input: HTMLElement) => {
		input.style.height = '';
		input.style.height = `${input.scrollHeight}px`;
	},
	limit = (input: HTMLElement, maxRows = 0) => {
		if (maxRows > 0) {
			const rows = input.getAttribute('rows') ?? '',
				height = input.style.height;
			input.style.height = '';
			input.setAttribute('rows', maxRows as unknown as string);
			input.style.maxHeight = input.getBoundingClientRect().height + 'px';
			input.style.height = height;
			input.setAttribute('rows', rows);
		}
	},
	useAutosize = <T extends BaseInput>(host: T) => {
		const { value, maxRows } = host,
			input = useMemo(
				() => () =>
					(host.shadowRoot as ShadowRoot).querySelector(
						'#input'
					) as HTMLElement,
				[]
			);
		useEffect(() => limit(input(), maxRows), [maxRows, input]);
		useEffect(() => autosize(input()), [input, value]);
		useEffect(() => {
			const el = input(),
				observer = new ResizeObserver(() =>
					requestAnimationFrame(() => autosize(el))
				);
			observer.observe(el);
			return () => observer.unobserve(el);
		}, [input]);
	};
