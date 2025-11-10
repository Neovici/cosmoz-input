import { useCallback, useEffect, useRef } from '@pionjs/pion';
import { useImperativeApi } from '@neovici/cosmoz-utils/hooks/use-imperative-api';
import { notifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';

type Input = HTMLInputElement | HTMLTextAreaElement;

export interface BaseInput extends HTMLElement {
	value?: string | number;
	maxRows?: number;
	focused?: boolean;
	disabled?: boolean;
}
export const useInput = <T extends BaseInput>(host: T) => {
	const inputRef = useRef<Input | undefined>(undefined);
	const onRef = useCallback(
		(el?: Element) => (inputRef.current = el as Input),
		[],
	);
	const root = host.shadowRoot as ShadowRoot,
		onChange = useCallback(
			(e: Event) =>
				host.dispatchEvent(new Event(e.type, { bubbles: e.bubbles })),
			[],
		),
		onInput = useCallback((e: InputEvent) => {
			const input = e.target as HTMLInputElement;
			notifyProperty(host, 'value', input.value);
			// Firefox fallback: update data-with-value attribute
			host.toggleAttribute('data-with-value', input.value !== '');
		}, []),
		onFocus = useCallback((e: FocusEvent) => {
			notifyProperty(host, 'focused', e.type === 'focus');
			// Firefox fallback: update data-focus attribute
			host.toggleAttribute('data-focus', e.type === 'focus');
		}, []),
		focus = useCallback(() => inputRef.current?.focus(), []),
		validate = useCallback(() => {
			const valid = inputRef.current?.checkValidity();
			host.toggleAttribute('invalid', !valid);
			return valid;
		}, []);

	useImperativeApi({ focus, validate }, [focus, validate]);

	// Firefox fallback: sync data-with-value attribute with input value
	useEffect(() => {
		const updateValueState = () => {
			const hasValue = inputRef.current?.value !== '';
			host.toggleAttribute('data-with-value', hasValue);
		};

		// Update on mount and when value changes
		updateValueState();

		// Observe value changes from outside (e.g., programmatic changes)
		const observer = new MutationObserver(updateValueState);
		if (inputRef.current) {
			observer.observe(inputRef.current, {
				attributes: true,
				attributeFilter: ['value'],
			});
		}

		return () => observer.disconnect();
	}, [host.value]);

	useEffect(() => {
		const onMouseDown = <T extends Event>(e: T) => {
			if (
				e.defaultPrevented ||
				host.disabled ||
				(e.target as HTMLElement).matches('input, textarea, label')
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
		onRef,
	};
};
