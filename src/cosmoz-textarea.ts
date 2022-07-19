import { html } from 'lit-html'; // eslint-disable-line object-curly-newline
import { live } from 'lit-html/directives/live.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { component } from 'haunted';
import { BaseInput, useInput, useAutosize } from './use-input';
import { Render, ObjectFromList, render, attributes } from './render';

const observedAttributes = ['rows', ...attributes];

type CosmozInput = HTMLElement &
	ObjectFromList<typeof observedAttributes> &
	BaseInput &
	Render;

export const Textarea = (host: CosmozInput) => {
	const {
			autocomplete,
			value,
			placeholder,
			readonly,
			disabled,
			rows,
			cols,
			maxlength,
		} = host,
		{ onChange, onFocus, onInput } = useInput(host);

	useAutosize(host);

	return render(
		html`
			<textarea id="input" part="input" style="resize: none"
				autocomplete=${ifDefined(autocomplete)}
				placeholder=${placeholder || ' '}
				rows=${rows ?? 1} cols=${ifDefined(cols)}
				?readonly=${readonly} ?aria-disabled=${disabled} ?disabled=${disabled}
				.value=${live(value ?? '')} maxlength=${ifDefined(maxlength)} @input=${onInput}
				@change=${onChange} @focus=${onFocus} @blur=${onFocus}>`,
		host
	);
};

customElements.define(
	'cosmoz-textarea',
	component<CosmozInput>(Textarea, { observedAttributes })
);