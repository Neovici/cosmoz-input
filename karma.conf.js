/* eslint-disable no-console */
/* eslint-env node */
const { createDefaultConfig } = require('@open-wc/testing-karma'),
	merge = require('deepmerge'),
	baseCustomLaunchers = {
		FirefoxHeadless: {
			base: 'Firefox',
			flags: ['-headless']
		}
	},
	sauceCustomLaunchers = {
		slChrome: {
			base: 'SauceLabs',
			browserName: 'chrome',
			browserVersion: 'beta',
			platformName: 'Windows 10'
		}
	},
	allCustomLaunchers = {
		...baseCustomLaunchers,
		...sauceCustomLaunchers
	};

module.exports = config => {

	const useSauce = process.env.SAUCE_USERNAME && process.env.SAUCE_ACCESS_KEY,
		customLaunchers = useSauce ? allCustomLaunchers : baseCustomLaunchers;

	if (!useSauce) {
		console.warn('Missing SAUCE_USERNAME/SAUCE_ACCESS_KEY, skipping sauce.');
	}

	config.set(
		merge(createDefaultConfig(config), {
			coverageIstanbulReporter: {
				thresholds: {
					global: {
						statements: 75,
						branches: 75,
						functions: 80,
						lines: 75
					}
				}
			},
			customLaunchers,
			browsers: Object.keys(customLaunchers),
			files: [{
				pattern: config.grep ? config.grep : 'test/**/*.test.js',
				type: 'module'
			}],

			esm: {
				nodeResolve: true,
				preserveSymlinks: true
			},
			client: {
				mocha: {
					ui: 'tdd'
				}
			},
			sauceLabs: {
				testName: 'cosmoz-input karma tests'
			},
			reporters: ['dots', ...useSauce ? ['saucelabs'] : ''],
			singleRun: true
		})
	);
	return config;
};
