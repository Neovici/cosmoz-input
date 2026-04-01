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
		width: calc(var(--cz-spacing) * 9);
		height: calc(var(--cz-spacing) * 4.5);
		display: inline-block;
		position: relative;
		border-radius: var(--cz-radius-3xl);
		overflow: hidden;
		outline: none;
		border: none;
		cursor: pointer;
		background: var(--cz-color-bg-quaternary);
		transition: background-color ease 0.25s;
		margin: 0;
	}
	.toggle::before {
		content: '';
		display: block;
		position: absolute;
		z-index: 2;
		width: calc(var(--cz-spacing) * 3.5);
		height: calc(var(--cz-spacing) * 3.5);
		background: var(--cz-color-brand-25);
		left: calc(var(--cz-spacing) * 0.5);
		top: calc(var(--cz-spacing) * 0.5);
		border-radius: var(--cz-radius-full);
		transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.25s;
	}
	.toggle:checked {
		background: var(--cz-color-bg-brand-solid);
	}
	.toggle:checked::before {
		left: calc(var(--cz-spacing) * 5);
	}
	label {
		padding-left: calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
		cursor: pointer;
		user-select: none;
	}

	.failure {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
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
		margin-left: calc(var(--cz-spacing) * 1);
	}
`;

customElements.define(
	'cosmoz-toggle',
	component(CosmozToggle, {
		styleSheets: [style, toggleStyles],
		observedAttributes: ['disabled'],
	}),
);
