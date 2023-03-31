import { html } from 'lit-html';
import '../src/cosmoz-input';

export default {
	title: 'Input',
	component: 'cosmoz-input',
};

const basic = () => html`
		<cosmoz-input .label=${'Choose color'} .value=${'Red'}></cosmoz-input>
	`,
	error = () => html`
		<cosmoz-input
			.label=${'Choose color'}
			.value=${'Red'}
			invalid
			.errorMessage=${'Something is wrong!'}
		></cosmoz-input>
	`,
	autosize = () => html`
		<cosmoz-input
			autosize
			no-label-float
			type="number"
			.value=${3.12}
		></cosmoz-input>
	`,
	color = () => html`
		<cosmoz-input
			no-label-float
			type="color"
			.value=${'#ff0000'}
		></cosmoz-input>
	`

export { basic, error, autosize, color };
