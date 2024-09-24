/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { legacyPlugin } from '@web/dev-server-legacy';
import { playwrightLauncher } from '@web/test-runner-playwright';
// eslint-disable-next-line no-undef
const mode = process.env.MODE || 'dev';
if (!['dev', 'prod'].includes(mode)) {
	throw new Error(`MODE must be "dev" or "prod", was "${mode}"`);
}

const browsers = {
	firefox: playwrightLauncher({ product: 'firefox' }),
};

const noBrowser = (b) => {
	throw new Error(`No browser configured named '${b}'; using defaults`);
};
let commandLineBrowsers;
try {
	// eslint-disable-next-line no-undef
	commandLineBrowsers = process.env.BROWSERS?.split(',').map(
		(b) => browsers[b] ?? noBrowser(b)
	);
} catch (e) {
	console.warn(e);
}

export default {
	rootDir: '.',
	files: ['./test/**/*_test.js'],
	nodeResolve: { exportConditions: mode === 'dev' ? ['development'] : [] },
	preserveSymlinks: true,
	browsers: commandLineBrowsers ?? Object.values(browsers),
	testFramework: {
		// https://mochajs.org/api/mocha
		config: {
			ui: 'tdd',
			timeout: '60000',
		},
	},
	plugins: [
		legacyPlugin({
			polyfills: {
				webcomponents: true,
				custom: [
					{
						name: 'lit-polyfill-support',
						path: 'node_modules/lit/polyfill-support.js',
						test: "!('attachShadow' in Element.prototype) || !('getRootNode' in Element.prototype) || window.ShadyDOM && window.ShadyDOM.force",
						module: false,
					},
				],
			},
		}),
	],
};
