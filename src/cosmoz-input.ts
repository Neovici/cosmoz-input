import { html } from 'lit-html'; // eslint-disable-line object-curly-newline
import { live } from 'lit-html/directives/live.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { component } from 'haunted';
import { BaseInput, useInput, useAllowedPattern } from './use-input';
import { Render, ObjectFromList, render, attributes } from './render';

const observedAttributes = [
	'type',
	'pattern',
	'allowed-pattern',
	'min',
	'max',
	'step',
	...attributes,
];

type CosmozInput = HTMLElement &
	ObjectFromList<typeof observedAttributes> &
	BaseInput &
	Render;

export const Input = (host: CosmozInput) => {
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
			maxlength,
		} = host,
		{ onChange, onFocus, onInput } = useInput(host),
		onBeforeInput = useAllowedPattern(allowedPattern);
	return render(
		html`<input
			id="input"
			part="input"
			type=${type}
			pattern=${ifDefined(pattern)}
			autocomplete=${ifDefined(autocomplete)}
			placeholder=${placeholder || ' '}
			?readonly=${readonly}
			?aria-disabled=${disabled}
			?disabled=${disabled}
			.value=${live(value ?? '')}
			maxlength=${ifDefined(maxlength)}
			@beforeinput=${onBeforeInput}
			@input=${onInput}
			@change=${onChange}
			@focus=${onFocus}
			@blur=${onFocus}
			min=${ifDefined(min)}
			max=${ifDefined(max)}
			step=${ifDefined(step)}
		/>`,
		host
	);
};

customElements.define(
	'cosmoz-input',
	component<CosmozInput>(Input, { observedAttributes })
);