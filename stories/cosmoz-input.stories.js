import { html } from 'lit-html';
import '../cosmoz-input';

export default {
	title: 'Input',
	component: 'cosmoz-input'
};

const basic = () => html`
		<cosmoz-input
			.label=${ 'Choose color' }
			.value=${ 'Red' }
		></cosmoz-input>
	`,

	error = () => html`
		<cosmoz-input
			.label=${ 'Choose color' }
			.value=${ 'Red' }
			invalid
			.errorMessage=${ 'Something is wrong!' }
		></cosmoz-input>
	`;
export {
	basic,
	error
};
