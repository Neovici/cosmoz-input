import { html } from 'lit-html';
import '../src/cosmoz-input';
import { style } from './style';

export default {
	title: 'Input',
	component: 'cosmoz-input',
};

export const basic = () => html`
	${style}
	<cosmoz-input .label=${'Choose color'}></cosmoz-input>
`;

export const alwaysFloatLabel = () => html`
	${style}
	<cosmoz-input
		always-float-label
		.label=${'Choose color'}
		.placeholder=${'placeholder text'}
	></cosmoz-input>
`;

export const noLabelFloat = () => html`
	${style}
	<cosmoz-input no-label-float .label=${'Choose color'}></cosmoz-input>
`;

export const error = () => html`
	${style}
	<cosmoz-input
		.label=${'Choose color'}
		.value=${'Red'}
		invalid
		.errorMessage=${'Something is wrong!'}
	></cosmoz-input>
`;
export const autosize = () => html`
	${style}
	<cosmoz-input
		autosize
		no-label-float
		type="number"
		.value=${3.12}
	></cosmoz-input>
`;
export const color = () => html`
	${style}
	<cosmoz-input no-label-float type="color" .value=${'#ff0000'}></cosmoz-input>
`;

export const contour = () => html`
	${style}
	<style>
		cosmoz-input {
			--cosmoz-input-color: #aeacac;
			--cosmoz-input-border-radius: 4px;
			--cosmoz-input-wrap-padding: 12px;
			--cosmoz-input-line-display: none;
			--cosmoz-input-contour-size: 1px;
			--cosmoz-input-label-translate-y: 10px;
			--cosmoz-input-float-display: none;
			--cosmoz-input-padding-top: 10px;
			--cosmoz-input-padding-bottom: 10px;
		}
	</style>
	<cosmoz-input .label=${'Insert a text input'}></cosmoz-input>
	<cosmoz-input
		always-float-label
		.label=${'This label always floats'}
	></cosmoz-input>

	<cosmoz-input
		invalid
		.label=${'This input is invalid!'}
		.errorMessage=${'Something is rotten in the state of Denmark.'}
	></cosmoz-input>
	<cosmoz-input disabled .label=${'This input is disabled!'}></cosmoz-input>
`;
