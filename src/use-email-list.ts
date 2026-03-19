import { useImperativeApi } from '@neovici/cosmoz-utils/hooks/use-imperative-api';
import { notifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';
import { useCallback, useEffect, useRef, useState } from '@pionjs/pion';

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u;

export interface EmailListHost extends HTMLElement {
	value?: string[];
	disabled?: boolean;
	readonly?: boolean;
	focused?: boolean;
}

export const useEmailList = (host: EmailListHost) => {
	const [text, setText] = useState('');
	const inputRef = useRef<HTMLInputElement | undefined>(undefined);

	const onRef = useCallback(
		(el?: Element) => (inputRef.current = el as HTMLInputElement),
		[],
	);

	const addEmail = useCallback((raw: string) => {
		const email = raw.trim().toLowerCase();
		if (!email || !emailRegex.test(email)) return false;
		const current = host.value ?? [];
		if (current.includes(email)) return true;
		notifyProperty(host, 'value', [...current, email]);
		return true;
	}, []);

	const removeEmail = useCallback((email: string) => {
		const current = host.value ?? [];
		notifyProperty(
			host,
			'value',
			current.filter((e) => e !== email),
		);
	}, []);

	const setInvalid = useCallback((invalid: boolean) => {
		host.toggleAttribute('invalid', invalid);
	}, []);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Enter' || e.key === ',') {
				e.preventDefault();
				if (addEmail(text)) {
					setText('');
					setInvalid(false);
				} else if (text.trim()) {
					setInvalid(true);
				}
			}
			if (e.key === 'Backspace' && !text) {
				const current = host.value ?? [];
				if (current.length > 0) {
					notifyProperty(host, 'value', current.slice(0, -1));
				}
			}
		},
		[text],
	);

	const onInput = useCallback((e: InputEvent) => {
		const val = (e.target as HTMLInputElement).value;
		if (val.includes(',')) {
			const parts = val.split(',');
			for (const part of parts.slice(0, -1)) addEmail(part);
			setText(parts.at(-1)!.trim());
			return;
		}
		setText(val);
	}, []);

	const onFocus = useCallback(() => notifyProperty(host, 'focused', true), []);

	const onBlur = useCallback(() => {
		if (text.trim()) {
			if (addEmail(text)) {
				setText('');
				setInvalid(false);
			} else {
				setInvalid(true);
			}
		}
		notifyProperty(host, 'focused', false);
	}, [text]);

	const validate = useCallback(() => {
		const current = host.value ?? [];
		const valid =
			current.every((e) => emailRegex.test(e)) &&
			(!text.trim() || emailRegex.test(text.trim()));
		host.toggleAttribute('invalid', !valid);
		return valid;
	}, [text]);

	useImperativeApi({ validate }, [validate]);

	useEffect(() => {
		const root = host.shadowRoot as ShadowRoot;
		const onMouseDown = (e: Event) => {
			const target = (e as MouseEvent).composedPath()[0] as Element;
			if (target?.closest?.('input, button')) return;
			e.preventDefault();
			inputRef.current?.focus();
		};
		root.addEventListener('mousedown', onMouseDown);
		return () => root.removeEventListener('mousedown', onMouseDown);
	}, []);

	return {
		text,
		onRef,
		onKeyDown,
		onInput,
		onFocus,
		onBlur,
		removeEmail,
	};
};
