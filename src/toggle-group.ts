import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { invoke } from '@neovici/cosmoz-utils/function';
import { prop } from '@neovici/cosmoz-utils/object';
import { component, css, html, useCallback, useProperty } from '@pionjs/pion';
import { nothing, type TemplateResult } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';

export interface Option<I> {
	value: I;
	/** invoked with the item */
	label?: string | ((item: I) => string);
	/** icon factory, cosmoz-icons style */
	icon?: (opts?: { width?: string; height?: string }) => TemplateResult;
	/** invoked with the item */
	title?: string | ((item: I) => string);
	disabled?: boolean;
}

export interface ToggleGroupElement<I = unknown> extends HTMLElement {
	value?: I;
	options?: (I | Option<I>)[];
	/** picks the dedupe key off an option; selection compares by it */
	valueProperty?: string;
	disabled?: boolean;
	label?: string;
}

/**
 * A segmented value picker: the selection is the element in the
 * options array, like cosmoz-autocomplete's items. The pick commits
 * via pion's `useProperty` — uncontrolled consumers get the write and
 * `value-changed` for free; controlled ones take it over with `lift`.
 */
const ToggleGroup = <I>(host: ToggleGroupElement<I>) => {
	const labelOf = (option: Option<I>) => {
		if (option.label != null) return invoke(option.label, option.value);
		return typeof option.value === 'string' ? option.value : '';
	};
	const options = (host.options ?? []).map((option) =>
		typeof option === 'object' &&
		option != null &&
		'value' in (option as Option<I>)
			? (option as Option<I>)
			: ({ value: option as I } as Option<I>),
	);
	const [value, setValue] = useProperty<I>('value');
	// compare by the valueProperty key when set (rebuilt arrays still
	// match), by identity otherwise
	const keyOf = useCallback(
		(item: I) => prop(host.valueProperty)(item),
		[host],
	);
	const key = keyOf(value as I);

	const onPick = useCallback(
		(option: Option<I>) => setValue(option.value),
		[setValue],
	);

	return html`<div
		class="group"
		part="group"
		role="radiogroup"
		aria-label=${host.label ?? ''}
	>
		${options.map((option) => {
			const selected = key === keyOf(option.value);
			const text = labelOf(option);
			return html`<button
				type="button"
				role="radio"
				aria-checked=${selected ? 'true' : 'false'}
				?disabled=${option.disabled || host.disabled}
				title=${option.title != null
					? invoke(option.title, option.value)
					: nothing}
				part=${selected ? 'option selected-option' : 'option'}
				class=${selected ? 'option selected' : 'option'}
				@click=${() => onPick(option)}
			>
				${option.icon?.({ width: '16', height: '16' })}${text}
			</button>`;
		})}
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
		display: inline-flex;
		align-items: center;
		gap: calc(var(--cz-spacing) * 1);
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

	.option:focus-visible {
		box-shadow: var(--cz-focus-ring);
		color: var(--cz-color-text-secondary);
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
		observedAttributes: ['label', 'disabled', 'value-property'],
	}),
);

export type ToggleGroupProps<I> = {
	options: (I | Option<I>)[];
	value?: I;
	valueProperty?: string;
	label?: string;
	disabled?: boolean;
	/** receives the whole `value-changed` event (detail = { value, updater }) */
	onValueChanged?: (event: CustomEvent<{ value: I }>) => void;
};

/** Typed helper: the element, with props; `detail` carries the picked element. */
export const toggleGroup = <I>(props: ToggleGroupProps<I>) =>
	html`<cosmoz-toggle-group
		.options=${props.options}
		.value=${props.value}
		value-property=${ifDefined(props.valueProperty)}
		.label=${ifDefined(props.label)}
		?disabled=${props.disabled}
		@value-changed=${props.onValueChanged}
	></cosmoz-toggle-group>`;
