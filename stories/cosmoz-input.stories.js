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
	`;
export { basic };
