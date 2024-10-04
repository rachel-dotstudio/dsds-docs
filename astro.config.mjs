// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { formatList } from 'astro/runtime/server/render/util.js';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			head: [ {
				tag: 'link',
				attrs: {
					rel: 'stylesheet',
					href: '/styles/styles.css',
				},
			}],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Foundations', slug: 'getting-started/foundations' },
						{ label: 'Figma', slug: 'getting-started/figma' },
						{ label: 'Storybook', slug: 'getting-started/storybook' },
						{ label: 'Github', slug: 'getting-started/github' },
						{ label: 'Usage', slug: 'getting-started/usage' },
					],
				},
				{
					label: 'Tokens',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', slug: 'tokens/overview' },
						{ label: 'Buttons', slug: 'tokens/buttons' },
						{ label: 'Colors', slug: 'tokens/colors' },
						{ label: 'Elevation', slug: 'tokens/elevation' },
						{ label: 'Forms', slug: 'tokens/forms' },
						{ label: 'Layout', slug: 'tokens/layout' },
						{ label: 'Typography', slug: 'tokens/typography' },
					],
				},

				{
					label: 'Resources',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Accessibility Commitment', slug: 'resources/accessibility' },
						{ label: 'Brand Identity', slug: 'resources/brand-identity' },
						{ label: 'Guidelines', slug: 'resources/guidelines' },
						{ label: 'Design System Resources', slug: 'resources/design-system-resources' },
						{ label: 'Other Design Systems', slug: 'resources/other-design-systems' },
						{ label: 'Privacy Policy', slug: 'resources/privacy-policy' },
						{ label: 'Changelog', slug: 'resources/changelog' },
					],
				},
			],
		}),
	],
	vite: {
		build: {
			sourcemap: false, // Disable source maps
		},
		css: {
			devSourcemap: false, // Disable CSS source maps in development
		},
		// ... any other Vite configurations ...
	},
});
