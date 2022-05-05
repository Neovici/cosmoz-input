import { html } from 'lit-html'; // eslint-disable-line object-curly-newline
import { live } from 'lit-html/directives/live';
import { ifDefined } from 'lit-html/directives/if-defined';

import { component } from 'haunted';
import { useInput, useAutosize } from './use-input';
import { render, attributes } from './render';

export const Textarea = host => {
		const {
				autocomplete,
				value,
				placeholder,
				readonly,
				disabled,
				rows,
				cols,
				maxlength
			} = host,
			{ onChange, onFocus, onInput } = useInput(host);

		useAutosize(host);

		return render(html`
			<textarea id="input" part="input" style="resize: none"
				autocomplete=${ ifDefined(autocomplete) } placeholder=${ placeholder || ' ' } rows=${ rows ?? 1 } cols=${ ifDefined(cols) }
				?readonly=${ readonly } ?aria-disabled=${ disabled } ?disabled=${ disabled }
				.value=${ live(value ?? '') } maxlength=${ifDefined(maxlength)} @input=${ onInput }
				@change=${ onChange } @focus=${ onFocus } @blur=${ onFocus }>`
		, host);
	},

	observedAttributes = [
		'rows',
		...attributes
	];

customElements.define('cosmoz-textarea', component(Textarea, { observedAttributes }));
