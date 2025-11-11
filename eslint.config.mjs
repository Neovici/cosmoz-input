import neoviciConfig from '@neovici/cfg/eslint/index.mjs';

export default [
	{
		ignores: [
			'coverage/**',
			'test/__snapshots__/**',
			'storybook-static/**',
			'dist/**',
		],
	},
	...neoviciConfig,
];
