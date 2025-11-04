import { html } from 'lit-html';
import '../src/cosmoz-toggle';
import { style } from './style';

export default {
	title: 'Toggle',
	component: 'cosmoz-toggle',
};

const basic = () => html`
	${style}
	<cosmoz-toggle .label=${'Is active'} .value=${true}></cosmoz-toggle>
`;

const disabled = () => html`
	${style}
	<cosmoz-toggle .label=${'Disabled toggle'} .value=${true} .disabled=${true}></cosmoz-toggle>
`;

export { basic, disabled };
