import { infoCircleIcon } from '@neovici/cosmoz-icons/untitled';
import '@neovici/cosmoz-tooltip';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export type ObjectFromList<T extends ReadonlyArray<string>, V = string> = {
	[K in T extends ReadonlyArray<infer U> ? U : never]: V;
};

export interface Render {
	label?: string;
	labelFor?: string | null;
	invalid?: boolean;
	errorMessage?: string;
	hint?: string;
	compact?: boolean;
	required?: boolean;
}

export const render = <T>(
		control: T,
		{
			label,
			labelFor = 'input',
			hint,
			invalid,
			errorMessage,
			compact,
			required,
		}: Render,
	) => html`
		<!-- label: visually hidden in compact mode -->
		${when(
			label,
			() =>
				html`<label
					for=${ifDefined(labelFor)}
					part="label"
					class=${ifDefined(compact ? 'sr-only' : undefined)}
					>${label}
					${when(
						required && !compact,
						() => html`<span class="required">*</span>`,
					)}
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
				compact && invalid && errorMessage,
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
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${when(
			!compact && hint && !invalid,
			() => html`<span class="hint" part="hint" id="hint">${hint}</span>`,
		)}
		<!-- error: replaces hint when invalid; visually hidden in compact -->
		${when(
			invalid && errorMessage,
			() =>
				html`<span
					class=${ifDefined(compact ? 'sr-only' : undefined)}
					part="error"
					id="error"
					>${errorMessage}</span
				>`,
		)}
	`,
	attributes = ['autocomplete', 'readonly', 'disabled', 'maxlength', 'invalid'];
