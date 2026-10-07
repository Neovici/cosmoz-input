import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { prop } from '@neovici/cosmoz-utils/object';
import { component, css, html, useCallback, useProperty } from '@pionjs/pion';
import { nothing, type TemplateResult } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';

export interface Option<I> {
	value: I;
	label?: string | ((item: I) => string);
	/** icon factory, called with sizing options (cosmoz-icons style) */
	icon?: (opts?: { width?: string; height?: string }) => TemplateResult;
	title?: string;
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
 * A value picker rendered as a segmented control: the selection is the
 * element in the options array, like cosmoz-autocomplete's items.
 *
 * The pick commits through pion's `useProperty`: the (uncontrolled)
 * consumer gets the write and the `value-changed` notification for
 * free; a controlled one takes the write over with pion's `lift`
 * (`@value-changed=${lift(setMyValue)}`) - the veto is `preventDefault`,
 * the detail carries `{ value, updater }`.
 */
const ToggleGroup = <I>(host: ToggleGroupElement<I>) => {
	const labelOf = (option: Option<I>) => {
		if (typeof option.label === 'function') {
			return option.label(option.value);
		}
		// plain strings name themselves; objects need a label
		return typeof option.value === 'string' && option.label == null
			? option.value
			: ((option.label as string) ?? '');
	};
	const options = (host.options ?? []).map((option) =>
		typeof option === 'object' &&
		option != null &&
		'value' in (option as Option<I>)
			? (option as Option<I>)
			: ({ value: option as I } as Option<I>),
	);
	const [value, setValue] = useProperty<I>('value');
	// selection compares by the valueProperty key when set (rebuilt
	// option arrays still match), by identity otherwise
	const keyOf = useCallback(
		(item: I) => prop(host.valueProperty)(item),
		[host],
	);
	const key = keyOf(value as I);

	const onPick = useCallback(
		(option: Option<I>) => {
			setValue(option.value);
		},
		[setValue],
	);

	const stateOf = useCallback((element: HTMLElement) => {
		// radio group: aria-checked carries the state; radios report,
		// they do not rove
		element.setAttribute('role', 'radio');
	}, []);

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
				title=${option.title ?? nothing}
				part=${selected ? 'option selected-option' : 'option'}
				class=${selected ? 'option selected' : 'option'}
				@click=${() => onPick(option)}
				${ref((el) => el && stateOf(el as HTMLElement))}
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

	.option:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

customElements.define(
	'cosmoz-toggle-group',
	component(ToggleGroup, {
		styleSheets: [normalize, style, groupStyles],
		observedAttributes: ['value', 'label', 'disabled', 'value-property'],
	}),
);
