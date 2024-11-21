/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				custombg: {
					black: '#000000',
					blue: '#429DC3',
					lightgray: '#A0AEB9',
					navy: '#0D3251',
					hovernavy: '#265870',
					base: 'rgb(22, 50, 60)',
					base2: 'rgb(42,87, 122)'
				},
			},
			screens: {
				xs: '450px'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
	corePlugins: {
		preflight: false,
	}
};
