import { html } from 'lit-html';
import '../src/cosmoz-toggle.js';

export default {
	title: 'Toggle',
	component: 'cosmoz-toggle',
};

const handler1 = (event) => {
	//eslint-disable-next-line no-console
	console.log(
		'The event listener handler says the toggle is',
		event.detail.value ? 'checked' : 'not checked'
	);
};
const handler2 = (checked) => {
	//eslint-disable-next-line no-console
	console.log(
		'The callback handler says the toggle is',
		checked ? 'checked' : 'not checked'
	);
};

const test = false;
const basic = () => {
	return html`
		<cosmoz-toggle
			label="Cosmoz Toggle"
			.checked=${test}
			@change=${handler1}
			.onChange=${handler2}
		></cosmoz-toggle>
	`;
};
export { basic };
