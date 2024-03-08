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

export const contour = () => html`
	<style>
		cosmoz-input {
			--cosmoz-input-color: #aeacac;
			--cosmoz-input-border-radius: 4px;
			--cosmoz-input-padding: 8px;
			--cosmoz-input-label-width: auto;
			--cosmoz-input-no-placeholder-label-bg: white;
			--cosmoz-input-label-padding: 0;
			--cosmoz-input-line-display: none;
			--cosmoz-input-contour-size: 1px;
			--cosmoz-input-background: white;
		}
	</style>
	<cosmoz-input .label=${'Insert a text input!'}></cosmoz-input>
	<cosmoz-input invalid .label=${'This input is invalid!'}></cosmoz-input>
	<cosmoz-input disabled .label=${'This input is disabled!'}></cosmoz-input>
`;
