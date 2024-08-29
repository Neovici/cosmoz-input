import { html } from 'lit-html';
import { live } from 'lit-html/directives/live.js';
import { ref } from 'lit-html/directives/ref.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { component } from '@pionjs/pion';
import { useImperativeApi } from '@neovici/cosmoz-utils/hooks/use-imperative-api';

import { BaseInput, useInput } from './use-input';
import { useAllowedPattern } from './use-allowed-pattern';
import { Render, ObjectFromList, render, attributes } from './render';
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
			accept,
		} = host,
		{ onChange, onFocus, onInput, onRef } = useInput(host);
	const onBeforeInput = useAllowedPattern(allowedPattern);

	useImperativeApi(
		{
			focus: () =>
				(host.shadowRoot?.querySelector('#input') as HTMLInputElement)?.focus(),
		},
		[]
	);

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
				accept=${accept}
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
		host
	);
};

customElements.define(
	'cosmoz-input',
	component<CosmozInput>(Input, { observedAttributes })
);
