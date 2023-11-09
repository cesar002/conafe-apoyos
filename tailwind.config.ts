import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'con-yellow': "#fcb913",
				'con-red': '#ed2f2f',
				'con-blue': '#4c7dbf',
				'con-gray': '#cccccc',
				'con-green': '#3aa65a',
				'con-primary': '#e4f1e7',
			}
		},
	},
	plugins: [],
}
export default config
