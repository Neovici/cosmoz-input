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
	checkBox = () => html`
	<cosmoz-input
		.label=${ 'Check this box' }
		type="checkbox"
		.value=${ false }
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
	checkBox,
	error
};
