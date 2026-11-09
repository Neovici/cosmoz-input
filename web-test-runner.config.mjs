import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
	files: ['test/**/*.test.ts'],
	nodeResolve: true,
	// Parallel files run in background tabs, where requestAnimationFrame never fires.
	concurrency: 1,
	plugins: [esbuildPlugin({ ts: true })],
};