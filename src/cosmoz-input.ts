import { component, sheet } from '@pionjs/pion';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { live } from 'lit-html/directives/live.js';
import { ref } from 'lit-html/directives/ref.js';

import { attributes, ObjectFromList, Render, render } from './render';
import { styles } from './styles';
import { useAllowedPattern } from './use-allowed-pattern';
import { BaseInput, useInput } from './use-input';
import { getPlaceholder } from './util';

const observedAttributes = [
	'type',
	'pattern',
	'allowed-pattern',
	'min',
	'max',
	'step',
	'autosize',
	'label',
	'placeholder',
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
			readonly,
			disabled,
			min,
			max,
			step,
			maxlength,
		} = host,
		{ onChange, onFocus, onInput, onRef } = useInput(host);
	const onBeforeInput = useAllowedPattern(allowedPattern);

	return render(
		html`
			<input
				${ref(onRef)}
				style="--chars: ${value?.toString()?.length ?? 0}ch"
				id="input"
				part="input"
				type=${type}
				pattern=${ifDefined(pattern)}
				autocomplete=${ifDefined(autocomplete)}
				placeholder=${getPlaceholder(host)}
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
			/>
		`,
		host,
	);
};

customElements.define(
	'cosmoz-input',
	component<CosmozInput>(Input, {
		observedAttributes,
		styleSheets: [sheet(styles)],
		shadowRootInit: { mode: 'open', delegatesFocus: true },
	}),
);
