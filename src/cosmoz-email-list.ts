import '@neovici/cosmoz-tag/cosmoz-tag';
import { component, sheet } from '@pionjs/pion';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { live } from 'lit-html/directives/live.js';
import { ref } from 'lit-html/directives/ref.js';
import { repeat } from 'lit-html/directives/repeat.js';
import { attributes, ObjectFromList, Render, render } from './render';
import { emailListStyles, styles } from './styles';
import { emailRegex, useEmailList, type EmailListHost } from './use-email-list';
import { getPlaceholder } from './util';

const observedAttributes = ['label', 'placeholder', ...attributes];

type CosmozEmailList = HTMLElement &
	ObjectFromList<typeof observedAttributes> &
	EmailListHost &
	Render;

export const EmailList = (host: CosmozEmailList) => {
	const { value = [], disabled, readonly, autocomplete } = host;
	const { text, onRef, onKeyDown, onInput, onFocus, onBlur, removeEmail } =
		useEmailList(host);

	return render(
		html`
			${repeat(
				value,
				(email) => email,
				(email) =>
					html`<cosmoz-tag
						removable
						color=${emailRegex.test(email) ? 'gray' : 'error'}
						?disabled=${disabled}
						@remove=${() => removeEmail(email)}
					>
						<span slot="prefix" class="prefix">
							${email.charAt(0).toUpperCase()}
						</span>
						${email}
					</cosmoz-tag>`,
			)}
			<input
				${ref(onRef)}
				id="input"
				part="input"
				type="email"
				autocomplete=${ifDefined(autocomplete)}
				placeholder=${value.length ? ' ' : getPlaceholder(host)}
				?readonly=${readonly}
				?aria-disabled=${disabled}
				?disabled=${disabled}
				.value=${live(text)}
				@keydown=${onKeyDown}
				@input=${onInput}
				@focus=${onFocus}
				@blur=${onBlur}
			/>
		`,
		host,
	);
};

customElements.define(
	'cosmoz-email-list',
	component<CosmozEmailList>(EmailList, {
		observedAttributes,
		styleSheets: [sheet(styles), sheet(emailListStyles)],
		shadowRootInit: { mode: 'open', delegatesFocus: true },
	}),
);
