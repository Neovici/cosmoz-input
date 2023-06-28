import { html } from 'lit-html';
import '../src/cosmoz-toggle.js';

export default {
	title: 'Toggle',
	component: 'cosmoz-toggle',
};

const handler1 = (event) => {
	//eslint-disable-next-line no-console
	console.log(event.detail.value);
};
const handler2 = (checked) => {
	//eslint-disable-next-line no-console
	console.log(checked);
};

let test;

const basic = () => {
	return html`
		<cosmoz-toggle
			label="Cosmoz Toggle"
			.value=${test}
			@change=${handler1}
			.onChange=${handler2}
		></cosmoz-toggle>
	`;
};
export { basic };
