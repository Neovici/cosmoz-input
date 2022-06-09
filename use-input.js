import { useCallback, useEffect, useMemo } from 'haunted';
import { useImperativeApi } from '@neovici/cosmoz-utils/lib/hooks/use-imperative-api';
import { notifyProperty } from '@neovici/cosmoz-utils/lib/hooks/use-notify-property';

export const useInput = (host) => {
		const root = host.shadowRoot,
			onChange = useCallback(
				(e) => host.dispatchEvent(new Event(e.type, { bubbles: e.bubbles })),
				[]
			),
			onInput = useCallback(
				(e) => notifyProperty(host, 'value', e.target.value),
				[]
			),
			onFocus = useCallback(
				(e) => notifyProperty(host, 'focused', e.type === 'focus'),
				[]
			),
			focus = useCallback(() => root.querySelector('#input')?.focus(), []),
			validate = useCallback(() => {
				const valid = root.querySelector('#input')?.checkValidity();
				host.toggleAttribute('invalid', !valid);
				return valid;
			}, []);

		useImperativeApi({ focus, validate }, [focus, validate]);

		useEffect(() => {
			const onMouseDown = (e) => {
				if (e.defaultPrevented || e.target.matches('input, textarea, label')) {
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
	useAllowedPattern = (allowedPattern) =>
		useMemo(() => {
			if (allowedPattern == null) {
				return;
			}
			const regexp = new RegExp(allowedPattern, 'u');
			return (e) => {
				if (!e.defaultPrevent && e.data && !regexp.test(e.data)) {
					e.preventDefault();
				}
			};
		}, [allowedPattern]),
	autosize = (input) => {
		input.style.height = '';
		input.style.height = `${input.scrollHeight}px`;
	},
	limit = (input, maxRows) => {
		if (maxRows > 0) {
			const rows = input.getAttribute('rows'),
				height = input.style.height;
			input.style.height = '';
			input.setAttribute('rows', maxRows);
			input.style.maxHeight = input.getBoundingClientRect().height + 'px';
			input.style.height = height;
			input.setAttribute('rows', rows);
		}
	},
	useAutosize = (host) => {
		const { value, maxRows } = host,
			input = useMemo(() => () => host.shadowRoot.querySelector('#input'), []);
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
