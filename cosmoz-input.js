import { html, nothing } from 'lit-html'; // eslint-disable-line object-curly-newline
import { live } from 'lit-html/directives/live';
import { ifDefined } from 'lit-html/directives/if-defined';

import { useImperativeApi } from '@neovici/cosmoz-utils/lib/hooks/use-imperative-api';
import { notifyProperty } from '@neovici/cosmoz-utils/lib/hooks/use-notify-property';
import { component, useCallback, useEffect, useMemo } from 'haunted';
import { styles } from './styles';

const Input = host => {
		const {
				type = 'text',
				autocomplete,
				pattern,
				allowedPattern,
				value,
				label,
				placeholder,
				readonly,
				disabled,
				invalid,
				errorMessage
			} = host,

			root = host.shadowRoot,
			onChange = useCallback(e => host.dispatchEvent(new Event(e.type, { bubbles: e.bubbles })), []),
			onInput = useCallback(e => notifyProperty(host, 'value', e.target.value), []),
			onBeforeInput = useMemo(() => {
				if (allowedPattern == null) {
					return;
				}
				const regexp = new RegExp(allowedPattern, 'u');
				return e => {
					if (!e.defaultPrevent && e.data && !regexp.test(e.data)) {
						e.preventDefault();
					}

				};
			}, [allowedPattern]),
			onFocus = useCallback(e => notifyProperty(host, 'focused', e.type === 'focus'), []),
			focus = useCallback(() => root.querySelector('input')?.focus(), []),
			validate = useCallback(() => {
				const valid = root.querySelector('input')?.checkValidity();
				host.toggleAttribute('invalid', !valid);
				return valid;
			}, []);

		useImperativeApi({
			focus,
			validate
		}, [focus, validate]);

		useEffect(() => {
			const onMouseDown = e => {
				if (e.target.matches('input, label')) {
					return;
				}
				e.preventDefault(); // don't blur
				if (!host.matches(':focus-within')) { // if input not focused
					focus(); // focus input
				}
			};

			root.addEventListener('mousedown', onMouseDown);
			return () => {
				root.removeEventListener('mousedown', onMouseDown);
			};
		}, [focus]);


		return html`
		<style>${ styles }</style>
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<input id="input" part="input"
					type=${ type } placeholder=${ placeholder || ' ' } pattern=${ ifDefined(pattern) }
					?readonly=${ readonly } ?aria-disabled=${ disabled } ?disabled=${ disabled }
					.value=${ live(value ?? '') } autocomplete=${ ifDefined(autocomplete) }
					@beforeinput=${ onBeforeInput } @input=${ onInput }
					@change=${ onChange } @focus=${ onFocus } @blur=${ onFocus }
				>
				${ label ? html`<label for="input" part="label">${ label }</label>` : nothing }
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${ invalid && errorMessage ? html`<div class="error" part="error">${ errorMessage }</div>` : nothing }
	`;
	},

	observedAttributes = [
		'type',
		'autocomplete',
		'pattern',
		'allowed-pattern',
		'readonly',
		'disabled',
		'invalid',
		'no-label-float',
		'always-float-label'
	];

customElements.define('cosmoz-input', component(Input, { observedAttributes }));

export {
	Input,
	observedAttributes
};
