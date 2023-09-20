import { html } from 'haunted';
import '../src/cosmoz-toggle.js';

export default {
	title: 'Toggle',
	component: 'cosmoz-toggle',
};

const handlerEvent = (event) => {
	//eslint-disable-next-line no-console
	console.log(
		'The event listener handler says the toggle is',
		event.detail.value ? 'checked' : 'not checked'
	);
};
const handlerCallback = (checked) => {
	//eslint-disable-next-line no-console
	console.log(
		'The callback handler says the toggle is',
		checked ? 'checked' : 'not checked'
	);
};

const testError = 'ERROR!';
const testWarning = () => {
	return html`<h1>WARNING!</h1>`;
};

const test = false;
const basic = () => {
	return html`
		<cosmoz-toggle
			label="Cosmoz Toggle"
			.checked=${test}
			@change=${handlerEvent}
			.onChange=${handlerCallback}
			.renderWarning=${testWarning()}
			.error=${testError}
		></cosmoz-toggle>
	`;
};
export { basic };
