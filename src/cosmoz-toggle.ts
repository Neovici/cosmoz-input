import { component, css, html, useCallback } from '@pionjs/pion';
import { live } from 'lit-html/directives/live.js';
import { when } from 'lit-html/directives/when.js';

interface Host extends Element {
	label: string;
	value?: boolean;
	disabled?: boolean;
	error?: string;
}

const CosmozToggle = (host: Host) => {
	const { label, value, disabled, error } = host;
	const onChange = useCallback(
		(e: InputEvent) =>
			host.dispatchEvent(
				new CustomEvent('change', {
					detail: (<HTMLInputElement>e.target).checked,
				}),
			),
		[],
	);

	return html`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${live(!!value)}
			?disabled=${disabled}
			@change=${onChange}
		/>
		${when(label, () => html`<label for="toggle">${label}</label>`)}
		<slot name="suffix"></slot>
		${when(error, (error) => html`<div class="failure">${error}</div>`)} `;
};

export const toggleStyles = css`
	.toggle {
		appearance: none;
		width: 35px;
		height: 18px;
		display: inline-block;
		position: relative;
		border-radius: 18px;
		overflow: hidden;
		outline: none;
		border: none;
		cursor: pointer;
		background: var(--cz-toggle-color, #101010);
		transition: background-color ease 0.25s;
		margin: 0;
	}
	.toggle::before {
		content: '';
		display: block;
		position: absolute;
		z-index: 2;
		width: 14px;
		height: 14px;
		background: var(--cz-toggle-thumb-color, #15b0d3);
		left: 2px;
		top: 2px;
		border-radius: 50%;
		transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.25s;
	}
	.toggle:checked {
		background: var(--cz-toggle-checked-color, #66d7f0);
	}
	.toggle:checked::before {
		left: 19px;
	}
	.toggle + label {
		padding-left: 16px;
		font-size: 14px;
		line-height: 18px;
		cursor: pointer;
		user-select: none;
	}
	.toggle[disabled] {
		opacity: 0.6;
	}
`;

const style = css`
	:host {
		display: block;
	}

	:host > * {
		vertical-align: middle;
		line-height: 0px;
	}

	::slotted(*) {
		margin-left: 5px;
	}
`;

customElements.define(
	'cosmoz-toggle',
	component(CosmozToggle, {
		observedAttributes: ['label', 'value', 'disabled', 'error'],
		styleSheets: [style, toggleStyles],
	}),
);
