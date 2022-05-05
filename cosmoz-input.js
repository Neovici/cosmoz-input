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
				disabled,
				min,
				max,
				step,
				maxlength
			} = host,
			{ onChange, onFocus, onInput } = useInput(host),
			onBeforeInput = useAllowedPattern(allowedPattern);
		return render(html`<input id="input" part="input"
				type=${ type }  pattern=${ ifDefined(pattern) }
				autocomplete=${ ifDefined(autocomplete) } placeholder=${ placeholder || ' ' }
				?readonly=${ readonly } ?aria-disabled=${ disabled } ?disabled=${ disabled }
				.value=${ live(value ?? '') } maxlength=${ifDefined(maxlength)}
				@beforeinput=${ onBeforeInput } @input=${ onInput }
				@change=${ onChange } @focus=${ onFocus } @blur=${ onFocus }
				min=${ ifDefined(min) } max=${ ifDefined(max) } step=${ifDefined(step)} >`
		, host);
	},

	observedAttributes = [
		'type',
		'pattern',
		'allowed-pattern',
		'min',
		'max',
		'step',
		...attributes
	];

customElements.define('cosmoz-input', component(Input, { observedAttributes }));
