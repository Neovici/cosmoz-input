import { html, nothing } from 'lit-html'; // eslint-disable-line object-curly-newline
import { live } from 'lit-html/directives/live';
import { useImperativeApi } from '@neovici/cosmoz-utils/lib/hooks/use-imperative-api';
import { notifyProperty } from '@neovici/cosmoz-utils/lib/hooks/use-notify-property';
import {
	component, useCallback, useEffect
} from 'haunted';

const styles = `
	:host {
		display: block;
		padding: 8px 0;
		padding-top: var(--paper-input-container_-_padding-top);
	}

	:host, label, input {
		font-family: var(--cosmoz-subhead-font-family, var(--paper-font-subhead_-_font-family, 'Roboto', 'Noto', sans-serif));
		font-size: var(--cosmoz-subhead-font-size, var(--paper-font-subhead_-_font-size, 16px));
		line-height: var(--cosmoz-subhead-line-height, var(--paper-font-subhead_-_line-height, 24px));
		display: block;
	}


	:host([disabled]) {
		opacity: var(--cosmoz-input-disabled-opacity, var(--paper-input-container-disabled_-_opacity, 0.33));
		pointer-events: none;
	}

	.wrap {
		display: flex;
		align-items: center;
		position: relative;
	}

	.control {
		flex: 1;
		position: relative;
	}

	input {
		padding: 0;
		margin: 0;
		outline: none;
		border: none;
		width: 100%;
		max-width: 100%;
		background-color: initial;
	}
	label {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		transition: transform 0.25s, width 0.25s;
		transform-origin: left top;
		color: var(--secondary-text-color, #737373);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	:host([always-float-label]) label,
	input:not(:placeholder-shown) + label {
		transform: translateY(-75%) scale(0.75);
	}
	input:not(:placeholder-shown):focus + label {
		color: var(--primary-color, #3f51b5);
	}

	.line {
		border-bottom: 2px solid var(--secondary-text-color, #737373);
	}
	:host(:focus-within) .line {
		border-bottom-color:  var(--primary-color, #3f51b5);
	}
	:host([disabled]) .line {
		border-bottom-style: dashed;
		opacity: var(--cosmoz-input-disabled-line-opacity, var(--paper-input-container-underline-disabled_-_opacity, 1));
	}

	:host([no-label-float]) .float,
	:host([no-label-float]) input:not(:placeholder-shown) + label  {
		display: none;
	}

	.error {
		font-size: 12px;
		line-height: 20px;
		overflow: hidden;
		text-overflow: clip;

	}
	:host([invalid]) label, .error {
		color: var(--error-color, #dd2c00);
	}
	:host([invalid]) .line {
		border-bottom-color: var(--error-color, #dd2c00);
	}
`,
	Input = host => {
		const {
				type = 'text',
				value,
				label,
				placeholder,
				readonly,
				disabled,
				invalid,
				errorMessage
			} = host,

			onInput = useCallback(e => notifyProperty(host, 'value', e.target.value), []),
			onFocus = useCallback(e => notifyProperty(host, 'focused', e.type === 'focus'), []),
			focus = useCallback(() => host.shadowRoot.querySelector('input')?.focus(), []);

		useImperativeApi({ focus }, [focus]);

		useEffect(() => {
			const root = host.shadowRoot,
				onMouseDown = e => {
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
			<div class="control">
				<input id="input" part="input"
					type=${ type } placeholder=${ placeholder || ' ' } ?readonly=${ readonly }
					?aria-disabled=${ disabled } ?disabled=${ disabled }
					.value=${ live(value ?? '') }
					@input=${ onInput } @focus=${ onFocus } @blur=${ onFocus }
				>
				${ label ? html`<label for="input">${ label }</label>` : nothing }
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${ invalid && errorMessage ? html`<div class="error" part="error">${ errorMessage }</div>` : nothing }
	`;
	},

	observedAttributes = [
		'type',
		'readonly',
		'disabled',
		'invalid',
		'no-label-float',
		'always-float-label'
	];

customElements.define(
	'cosmoz-input',
	component(Input, { observedAttributes })
);

export {
	Input,
	observedAttributes
};
