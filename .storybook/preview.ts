import { definePreview } from '@storybook/web-components-vite';
import '@neovici/cosmoz-tokens';
import { html } from 'lit-html';
import { within as withinShadow } from 'shadow-dom-testing-library';
import addonDocs from '@storybook/addon-docs';
import addonA11y from '@storybook/addon-a11y';
import addonVitest from '@storybook/addon-vitest';
// 👇 Extend TypeScript types for safety
export type ShadowQueries = ReturnType<typeof withinShadow>;

// Since Storybook@8.6
declare module 'storybook/internal/csf' {
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

			return html`
				<style>
					@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
					@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

					.story-root {
						font-family: var(--cz-font-body);
						color: var(--cz-color-text-primary);
						background: var(--cz-color-bg-primary);
						padding: calc(var(--cz-spacing) * 4);
						min-height: 100%;
						transition:
							background-color 0.2s,
							color 0.2s;
					}

					.story-row {
						display: flex;
						gap: calc(var(--cz-spacing) * 4);
						align-items: center;
						flex-wrap: wrap;
					}

					.story-stack {
						display: flex;
						flex-direction: column;
						gap: calc(var(--cz-spacing) * 6);
					}

					.story-grid {
						display: grid;
						gap: calc(var(--cz-spacing) * 4);
						grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
					}

					.story-section-title {
						font-size: var(--cz-text-lg);
						font-weight: var(--cz-font-weight-semibold);
						color: var(--cz-color-text-secondary);
						margin-bottom: calc(var(--cz-spacing) * 4);
					}

					.story-label {
						font-size: var(--cz-text-sm);
						color: var(--cz-color-text-tertiary);
						min-width: 100px;
						text-align: right;
					}
				</style>
				<div class="story-root">${story()}</div>
			`;
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
