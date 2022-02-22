import { html } from 'lit-html'; // eslint-disable-line object-curly-newline
import { live } from 'lit-html/directives/live';
import { ifDefined } from 'lit-html/directives/if-defined';

import { component } from 'haunted';
import { useInput, useAllowedPattern } from './use-input';
import { render, attributes } from './render';

export const Input = host => {
		const {
				type = 'text',
				pattern,
				allowedPattern,
				autocomplete,
				value,
				placeholder,
				readonly,
				disabled
			} = host,
			{ onChange, onFocus, onInput, onChecked } = useInput(host),
			isCheckbox =  type === 'checkbox',
			onBeforeInput = useAllowedPattern(allowedPattern);
		return render(html`<input id="input" part="input"
				type=${ type } pattern=${ ifDefined(pattern) }
				class=${ type }
				autocomplete=${ ifDefined(autocomplete) } placeholder=${ placeholder || ' ' }
				?readonly=${ readonly } ?aria-disabled=${ disabled } ?disabled=${ disabled }
				.value=${ live(value ?? '') } ?checked=${ isCheckbox ? value : undefined }
				@beforeinput=${ onBeforeInput } @input=${ isCheckbox ? onChecked : onInput }
				@change=${ onChange } @focus=${ onFocus } @blur=${ onFocus }>`
		, host);
	},

	observedAttributes = [
		'type',
		'pattern',
		'allowed-pattern',
		...attributes
	];

customElements.define('cosmoz-input', component(Input, { observedAttributes }));
