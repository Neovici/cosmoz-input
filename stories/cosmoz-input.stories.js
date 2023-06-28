import { html } from 'lit-html';
import '../src/cosmoz-input';

export default {
	title: 'Input',
	component: 'cosmoz-input',
};
export const basic = () => html`
	<cosmoz-input .label=${'Choose color'}></cosmoz-input>
`;

export const alwaysFloatLabel = () => html`
	<cosmoz-input
		always-float-label
		.label=${'Choose color'}
		.placeholder=${'placeholder text'}
	></cosmoz-input>
`;

export const noLabelFloat = () => html`
	<cosmoz-input no-label-float .label=${'Choose color'}></cosmoz-input>
`;

export const error = () => html`
	<cosmoz-input
		.label=${'Choose color'}
		.value=${'Red'}
		invalid
		.errorMessage=${'Something is wrong!'}
	></cosmoz-input>
`;
export const autosize = () => html`
	<cosmoz-input
		autosize
		no-label-float
		type="number"
		.value=${3.12}
	></cosmoz-input>
`;
export const color = () => html`
	<cosmoz-input no-label-float type="color" .value=${'#ff0000'}></cosmoz-input>
`;
