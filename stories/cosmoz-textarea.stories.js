import { html } from 'lit-html';
import '../src/cosmoz-textarea';

export default {
	title: 'Textarea',
	component: 'cosmoz-textarea',
};

const basic = () => html`
		<cosmoz-textarea .label=${'Choose color'} .value=${'Red'}></cosmoz-textarea>
	`,
	error = () => html`
		<cosmoz-textarea
			invalid
			.label=${'Choose color'}
			.value=${'Red\nGreen\nBlue'}
			.errorMessage=${'Something is wrong!'}
			.maxRows=${2}
		></cosmoz-textarea>
	`,
	contour = () => html`<style>
			cosmoz-textarea {
				--cosmoz-input-color: #aeacac;
				--cosmoz-input-border-radius: 4px;
				--cosmoz-input-padding: 12px;
				--cosmoz-input-line-display: none;
				--cosmoz-input-contour-size: 1px;
				--cosmoz-input-label-translate-y: 35%;
				--cosmoz-input-input-translate-y: 8px;
			}
		</style>
		<cosmoz-textarea
			.label=${'Choose color'}
			.value=${'Red\nGreen\nBlue'}
		></cosmoz-textarea> `;
export { basic, error, contour };
