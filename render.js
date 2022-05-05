import { html, nothing } from 'lit-html';
import { styles } from './styles';

export const render = (control, { label, invalid, errorMessage }) => html`
		<style>
			${styles}
		</style>
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				${control}
				${label
					? html`<label for="input" part="label">${label}</label>`
					: nothing}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${invalid && errorMessage
			? html`<div class="error" part="error">${errorMessage}</div>`
			: nothing}
	`,
	attributes = [
		'autocomplete',
		'readonly',
		'disabled',
		'maxlength',
		'invalid',
		'no-label-float',
		'always-float-label',
	];
