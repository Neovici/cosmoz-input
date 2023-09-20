import { html, component } from 'haunted';
import { toggleStyles } from '../src/toggle-styles.ts';
import { when } from 'lit-html/directives/when.js';

export const CosmozToggle = (host) => {
	const { label, checked, error, renderWarning, onChange } = host;
	const onChecked = (event) => {
		onChange?.(event.target.checked);
		host.dispatchEvent(
			new CustomEvent('change', { detail: { value: event.target.checked } })
		);
	};

	return html`
		<style>
			${toggleStyles} .line {
				display: none;
			}
			.toggle + label {
				vertical-align: top;
			}
		</style>
		<label class="switch">
			<input
				type="checkbox"
				id="toggle"
				@change=${onChecked}
				?checked=${checked}
			/>
			<div class="slider round"></div>
		</label>
		<label for="toggle" class="label"
			>${label}${when(renderWarning, () => renderWarning)}
			${error && html`<div class="failure">${error}</div>`}</label
		>
	`;
};
customElements.define(
	'cosmoz-toggle',
	component(CosmozToggle, { observedAttributes: ['label'] })
);
