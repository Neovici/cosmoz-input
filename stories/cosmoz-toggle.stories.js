import { html } from 'lit-html';
import '../src/cosmoz-toggle';

export default {
	title: 'Toggle',
	component: 'cosmoz-toggle',
};

const basic = () => html`
	<cosmoz-toggle .label=${'Label for the toggle!'}></cosmoz-toggle>
`;

export { basic };
