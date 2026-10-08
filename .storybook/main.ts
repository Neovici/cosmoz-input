import { defineMain } from '@storybook/web-components-vite/node';

export default defineMain({
	stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-vitest',
		'@storybook/addon-a11y',
		'@neovici/cfg/storybook/preset.mjs',
	],
	framework: {
		name: '@storybook/web-components-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
});
