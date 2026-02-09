import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { live } from 'lit-html/directives/live.js';
import { ref } from 'lit-html/directives/ref.js';

import { component, sheet } from '@pionjs/pion';
import { attributes, ObjectFromList, Render, render } from './render';
import { styles } from './styles';
import { useAutoHeight } from './use-auto-height';
import { BaseInput, useInput } from './use-input';

const observedAttributes = ['rows', 'placeholder', ...attributes];

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
		{ onChange, onFocus, onInput, onRef } = useInput(host);

	useAutoHeight(host);

	return render(
		html`
			<textarea id="input" part="input"
				${ref(onRef)}
				autocomplete=${ifDefined(autocomplete)}
				placeholder=${placeholder || ' '}
				rows=${rows ?? 1} cols=${ifDefined(cols)}
				?readonly=${readonly} ?aria-disabled=${disabled} ?disabled=${disabled}
				.value=${live(value ?? '')} maxlength=${ifDefined(maxlength)} @input=${onInput}
				@change=${onChange} @focus=${onFocus} @blur=${onFocus}>`,
		host,
	);
};

customElements.define(
	'cosmoz-textarea',
	component<CosmozInput>(Textarea, {
		observedAttributes,
		styleSheets: [sheet(styles)],
		shadowRootInit: { mode: 'open', delegatesFocus: true },
	}),
);
