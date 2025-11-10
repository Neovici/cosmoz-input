import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';

export type ObjectFromList<T extends ReadonlyArray<string>, V = string> = {
	[K in T extends ReadonlyArray<infer U> ? U : never]: V;
};

export interface Render {
	label?: string;
	invalid?: boolean;
	errorMessage?: string;
}

export const render = <T>(control: T, host: Render & HTMLElement) => {
	const { label, invalid, errorMessage } = host;

	return html`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${control}
				${when(
					label,
					() => html`<label for="input" part="label">${label}</label>`,
				)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${when(
			invalid && errorMessage,
			() => html`<div class="error" part="error">${errorMessage}</div>`,
		)}
	`;
};

export const attributes = [
	'autocomplete',
	'readonly',
	'disabled',
	'maxlength',
	'invalid',
	'no-label-float',
	'always-float-label',
];
