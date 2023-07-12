import { html, component } from 'haunted';
import { toggleStyles } from '../src/toggle-styles.ts';

export const CosmozToggle = (host) => {
	const { label, checked, onChange } = host;
	const onChecked = (event) => {
		onChange?.(event.target.checked);
		host.dispatchEvent(
			new CustomEvent('change', { detail: { value: event.target.checked } })
		);
	};

	return html`
		<style>
			${toggleStyles}
		</style>
		<div class="container">
			<label class="switch">
				<input
					type="checkbox"
					id="toggle"
					@change=${onChecked}
					?checked=${checked}
				/>
				<div class="slider round"></div>
			</label>
			<p class="label">${label}</p>
		</div>
	`;
};
customElements.define(
	'cosmoz-toggle',
	component(CosmozToggle, { observedAttributes: ['label'] })
);
