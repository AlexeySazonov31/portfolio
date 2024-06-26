import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import liveReload from 'vite-plugin-live-reload'


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		preact({
			prerender: {
				enabled: true,
				renderTarget: '#app',
				additionalPrerenderRoutes: ['/404'],
			},
		}),
		liveReload('./src/**/**/*.{ts,tsx}'),
	],
	preview: {
		host: true,
		port: 8080,
	}
});
