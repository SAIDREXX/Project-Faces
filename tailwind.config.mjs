/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				Primary01: "#233862",
				Primary02: "#0C4CBA",
				Secondary01: "#75B2E1",
				Accent01: "#173C86",
				BackgroundLight: "DBDBDB",
				BackgroundDark: "232323",
				FontLight: "232323",
				FontDark: "DBDBDB",
			},
			fontFamily: {
				Inter: ["Inter Variable", "sans-serif"],
			}
		},
	},
	plugins: [],
}
