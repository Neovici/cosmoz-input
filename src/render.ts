import { infoCircleIcon } from '@neovici/cosmoz-icons/untitled';
import '@neovici/cosmoz-tooltip';
import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';

export type ObjectFromList<T extends ReadonlyArray<string>, V = string> = {
	[K in T extends ReadonlyArray<infer U> ? U : never]: V;
};

export interface Render {
	label?: string;
	invalid?: boolean;
	errorMessage?: string;
	hint?: string;
	/** Help text that is read with the field but not shown. */
	description?: string;
	compact?: boolean;
	required?: boolean;
}

const showsError = ({ invalid, errorMessage }: Render) =>
	!!(invalid && errorMessage);

/**
 * ARIA state for the native control. `aria-invalid` follows the visible error,
 * which the form shows only once it's useful, so it is never announced early.
 */
export const ariaAttributes = (props: Render) => {
	const error = showsError(props),
		ids = [
			error ? 'error' : props.hint && !props.invalid && 'hint',
			props.description && 'description',
		].filter(Boolean);
	return {
		invalid: props.invalid ? 'true' : undefined,
		describedBy: ids.length ? ids.join(' ') : undefined,
	};
};

export const render = <T>(control: T, props: Render) => {
	const { hint, label, errorMessage, description, compact, required, invalid } =
			props,
		error = showsError(props),
		hidden = compact ? 'visually-hidden' : '';

	return html`
		<!-- label: visually hidden in compact mode so the field keeps its name -->
		${when(
			label,
			() =>
				html`<label for="input" part="label" class=${hidden}
					>${label}
					${when(required, () => html`<span class="required">*</span>`)}
				</label>`,
		)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${control}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${when(
				compact && error,
				() =>
					html`<cosmoz-tooltip
						placement="top"
						description=${errorMessage}
						delay="300"
					>
						${infoCircleIcon({ width: '16px', height: '16px' })}
					</cosmoz-tooltip>`,
			)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: hidden while invalid, when the error takes its place -->
		${when(
			hint && !invalid,
			() =>
				html`<span id="hint" class="hint ${hidden}" part="hint">${hint}</span>`,
		)}
		${when(
			error,
			() =>
				html`<span id="error" class="error ${hidden}" part="error"
					>${errorMessage}</span
				>`,
		)}
		${when(
			description,
			() =>
				html`<span id="description" class="visually-hidden"
					>${description}</span
				>`,
		)}
	`;
};

export const attributes = [
	'autocomplete',
	'readonly',
	'disabled',
	'maxlength',
	'invalid',
	'description',
];
