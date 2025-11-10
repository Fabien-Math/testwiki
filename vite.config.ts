import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	plugins: [tailwindcss(), sveltekit()],
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		vitePreprocess({}),
		mdsvex({
			extensions: ['.md', '.svx']
		})
	],
};

export default config;