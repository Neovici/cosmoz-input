import { html } from 'lit-html';
import '../cosmoz-textarea';

export default {
	title: 'Textarea',
	component: 'cosmoz-textarea'
};

const basic = () => html`
		<cosmoz-textarea
			.label=${ 'Choose color' }
			.value=${ 'Red' }
		></cosmoz-textarea>
	`,

	error = () => html`
		<cosmoz-textarea
			invalid
			.label=${ 'Choose color' }
			.value=${ 'Red\nGreen\nBlue' }
			.errorMessage=${ 'Something is wrong!' }
			.maxRows=${ 2 }
		></cosmoz-textarea>
	`;
export {
	basic,
	error
};
