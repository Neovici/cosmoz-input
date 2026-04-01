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
	compact?: boolean;
	required?: boolean;
}

export const render = <T>(
		control: T,
		{ hint, label, invalid, errorMessage, compact, required }: Render,
	) => html`
		<!-- label: hidden in compact mode -->
		${when(
			!compact && label,
			() =>
				html`<label for="input" part="label"
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
				invalid,
				() =>
					html`<cosmoz-tooltip
						placement="top"
						description=${invalid ? errorMessage : label}
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
			() => html`<span class="hint" part="hint">${hint}</span>`,
		)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${when(
			!compact && invalid && errorMessage,
			() => html`<span class="error" part="error">${errorMessage}</span>`,
		)}
	`,
	attributes = ['autocomplete', 'readonly', 'disabled', 'maxlength', 'invalid'];
