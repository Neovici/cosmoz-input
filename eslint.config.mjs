import neoviciConfig from '@neovici/cfg/eslint/index.mjs';

export default [
	{
		ignores: [
			'coverage/**',
			'storybook-static/**',
			'dist/**',
		],
	},
	...neoviciConfig,
];
