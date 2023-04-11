import { html } from 'lit-html';
import { component } from 'haunted';

import { BaseInput } from './use-input';
import { Render, ObjectFromList, render, attributes } from './render';

const observedAttributes = ['checked', ...attributes];

type CosmozInput = HTMLElement & ObjectFromList<typeof observedAttributes>;

export const Input = (host: CosmozInput) => {
	const { type = 'checkbox', checked, label } = host;
	return render(
		html`
			<input
				class="toggle"
				id="toggle"
				part="toggle"
				.type=${type}
				?checked=${checked}
				label=${label}
			/>
		`,
		host
	);
};

customElements.define(
	'cosmoz-toggle',
	component<CosmozInput>(Input, { observedAttributes })
);
