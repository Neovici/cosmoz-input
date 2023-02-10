import { useCallback, useEffect } from 'haunted';
import { useImperativeApi } from '@neovici/cosmoz-utils/hooks/use-imperative-api';
import { notifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';

export interface BaseInput extends HTMLElement {
	value?: string | number;
	maxRows?: number;
	focused?: boolean;
	disabled?: boolean;
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
	};
};
