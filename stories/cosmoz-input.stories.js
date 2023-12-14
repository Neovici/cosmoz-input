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

export const styledLocally = () => html`
	<style>
		cosmoz-input {
			--cosmoz-input-border: 1px solid gray;
			--cosmoz-input-border-radius: 4px;
			--cosmoz-input-padding: 8px;
			--cosmoz-input-label-width: auto;
			--cosmoz-input-no-placeholder-label-bg: white;
			transition: transform 0.25s, width 0.25s;
			transform-origin: left top;
		}
		cosmoz-input:focus-within {
			--cosmoz-input-border: 2px solid var(--focused-color);
		}
		cosmoz-input::part(label) {
			padding: 0 2px;
			caret-color: black;
		}
		cosmoz-input::part(line) {
			display: none;
		}
	</style>
	<cosmoz-input .label=${'Choose color'}></cosmoz-input>
`;
