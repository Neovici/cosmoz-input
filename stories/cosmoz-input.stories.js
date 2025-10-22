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
		placeholder=${'placeholder text'}
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
			--cosmoz-input-border-radius: 8px;
			--cosmoz-input-wrap-padding: 12px 16px;
			--cosmoz-input-padding: 14px 0px;
			--cosmoz-input-line-display: none;
			--cosmoz-input-contour-size: 1px;
			--cosmoz-input-label-translate-y: 8px;
			--cosmoz-input-float-display: none;
		}
		span {
			margin: 0 4px;
		}
	</style>
	<cosmoz-input .label=${'Insert a text input'}></cosmoz-input>
	<cosmoz-input
		.label=${'I want this input to have the suffix match the same placing!'}
		type="number"
		><span slot="suffix">${'suffix'}</span></cosmoz-input
	>
	<cosmoz-input .label=${'Same thing of above, with the prefix!'}
		><span slot="prefix">${'Prefix:'}</span></cosmoz-input
	>
	<cosmoz-input always-float-label .label=${'This label always floats'}
		><span slot="prefix">${'Example:'}</span></cosmoz-input
	>
	<cosmoz-input
		no-label-float
		.label=${'This label never floats'}
	></cosmoz-input>
	<cosmoz-input no-label-float .label=${'This label never floats with prefix'}
		><span slot="prefix">${'Example:'}</span></cosmoz-input
	>
	<cosmoz-input no-label-float .label=${'This label never floats with sufix'}
		><span slot="suffix">${'suffix'}</span></cosmoz-input
	>
	<cosmoz-input
		invalid
		.label=${'This input is invalid!'}
		.errorMessage=${'Something is rotten in the state of Denmark.'}
	></cosmoz-input>
	<cosmoz-input disabled .label=${'This input is disabled!'}></cosmoz-input>
`;
