import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, css, html, useCallback } from '@pionjs/pion';
import { ref } from 'lit-html/directives/ref.js';

export interface Option {
	value: string;
	label?: string;
	disabled?: boolean;
}

export interface ToggleGroupElement extends HTMLElement {
	value?: string;
	options?: (string | Option)[];
	disabled?: boolean;
	label?: string;
}

const normalizeOption = (option: string | Option): Option =>
	typeof option === 'string' ? { value: option, label: option } : option;

/**
 * A value picker rendered as a segmented control: value in, selection
 * out, radio semantics on the items - the input concerns of the tabs
 * family's segmented variant, standing on its own.
 */
const ToggleGroup = (host: ToggleGroupElement) => {
	const options = (host.options ?? []).map(normalizeOption);
	const value = host.value ?? options[0]?.value;
	const set = useCallback(
		(next: string) => {
			const changed = new CustomEvent('value-changed', {
				detail: { value: next },
				cancelable: true,
				bubbles: true,
				composed: true,
			});
			host.dispatchEvent(changed);
			if (changed.defaultPrevented) {
				return;
			}
			host.dispatchEvent(
				new CustomEvent('change', { detail: next, bubbles: true }),
			);
		},
		// host only
		[],
	);

	const onPick = useCallback(
		(e: Event) => {
			const name = (e.currentTarget as HTMLElement).getAttribute('data-value');
			if (name != null) {
				set(name);
			}
		},
		[set],
	);

	const roleOf = useCallback((element: HTMLElement, i: number) => {
		// radio group: aria-checked carries the state; an unselected
		// radio stays in the tab order (radios report, they don't
		// rove)
		element.setAttribute('role', 'radio');
		element.setAttribute(
			'aria-checked',
			element.getAttribute('data-selected') === 'true' ? 'true' : 'false',
		);
		if (i === 0) {
			element.setAttribute('tabindex', '0');
		}
	}, []);

	return html`<div
		class="group"
		part="group"
		role="radiogroup"
		aria-label=${host.label ?? ''}
	>
		${options.map(
			(option, i) =>
				html`<button
					type="button"
					role="radio"
					aria-checked=${option.value === value ? 'true' : 'false'}
					?disabled=${option.disabled || host.disabled}
					data-value=${option.value}
					data-selected=${option.value === value ? 'true' : 'false'}
					class=${option.value === value ? 'option selected' : 'option'}
					part=${option.value === value ? 'option selected-option' : 'option'}
					@click=${onPick}
					${ref((el) => el && roleOf(el as HTMLElement, i))}
				>
					${option.label ?? option.value}
				</button>`,
		)}
	</div>`;
};

const style = css`
	:host {
		display: inline-flex;
	}
`;

const groupStyles = css`
	.group {
		display: flex;
		align-items: stretch;
		gap: calc(var(--cz-spacing) * 1);
		padding: calc(var(--cz-spacing) * 1);
		border-radius: var(--cz-radius-lg);
		background-color: var(--cz-color-bg-secondary);
		box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
		font-family: var(--cz-font-body);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-semibold);
	}

	.option {
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-sm);
		border: 0;
		background: none;
		color: var(--cz-color-text-quaternary);
		font: inherit;
		cursor: pointer;
		white-space: nowrap;
		outline: 0;
	}

	.option:hover {
		color: var(--cz-color-text-secondary);
	}

	.option.selected {
		color: var(--cz-color-text-secondary);
		background-color: var(--cz-color-bg-primary);
		box-shadow: var(--cz-shadow-sm);
	}

	.option:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

customElements.define(
	'cosmoz-toggle-group',
	component(ToggleGroup, {
		styleSheets: [normalize, style, groupStyles],
		observedAttributes: ['value', 'label', 'disabled'],
	}),
);
