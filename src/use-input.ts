import { useImperativeApi } from '@neovici/cosmoz-utils/hooks/use-imperative-api';
import { notifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';
import { useCallback, useEffect, useRef } from '@pionjs/pion';

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
		onInput = useCallback(
			(e: InputEvent) =>
				notifyProperty(host, 'value', (e.target as HTMLInputElement).value),
			[],
		),
		onFocus = useCallback(
			(e: FocusEvent) => notifyProperty(host, 'focused', e.type === 'focus'),
			[],
		),
		validate = useCallback(() => {
			const valid = inputRef.current?.checkValidity();
			host.toggleAttribute('invalid', !valid);
			return valid;
		}, []);

	useImperativeApi({ validate }, [validate]);

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
				host.focus(); // delegates to input via delegatesFocus
			}
		};

		root.addEventListener('mousedown', onMouseDown);
		return () => root.removeEventListener('mousedown', onMouseDown);
	}, []);

	return {
		onChange,
		onFocus,
		onInput,
		onRef,
	};
};
