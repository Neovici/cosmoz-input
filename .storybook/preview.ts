import '@neovici/cosmoz-tokens';
import addonA11y from '@storybook/addon-a11y';
import addonDocs from '@storybook/addon-docs';
import addonVitest from '@storybook/addon-vitest';
import { definePreview } from '@storybook/web-components-vite';
import { html } from 'lit-html';
import { within as withinShadow } from 'shadow-dom-testing-library';
import './preview.css';
// 👇 Extend TypeScript types for safety
export type ShadowQueries = ReturnType<typeof withinShadow>;

// Since Storybook@8.6
declare module 'storybook/internal/csf' {
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	interface Canvas extends ShadowQueries {}
}

export default definePreview({
	addons: [addonDocs(), addonA11y(), addonVitest()],
	decorators: [
		(story, context) => {
			const isDark = context.globals?.theme === 'dark';

			if (isDark) {
				document.documentElement.classList.add('dark-mode');
			} else {
				document.documentElement.classList.remove('dark-mode');
			}

			return html`<div class="story-root">${story()}</div>`;
		},
	],

	globalTypes: {
		theme: {
			name: 'Theme',
			description: 'Global theme for components',
			defaultValue: 'light',
			toolbar: {
				icon: 'circlehollow',
				items: [
					{ value: 'light', icon: 'sun', title: 'Light' },
					{ value: 'dark', icon: 'moon', title: 'Dark' },
				],
				dynamicTitle: true,
			},
		},
	},

	// Augment the canvas with shadow-dom-testing-library queries
	beforeEach({ canvasElement, canvas }) {
		Object.assign(canvas, { ...withinShadow(canvasElement) });
	},

	parameters: {
		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: 'todo',
		},
	},
});
