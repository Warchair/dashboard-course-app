/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				// Simple 16 column grid
				16: "repeat(16, minmax(0, 1fr))",

				// Complex site-specific column configuration
				paymentcard: "repeat(3, 220px)",
			},
			transitionProperty: {
				height: "height",
				spacing: "margin, padding",
			},

			fontFamily: {
				inter: "Inter",
				roboto: "Roboto",
			},
			colors: {
				whitegray: "rgba(248, 248, 248, 1)",
			},
		},
	},
	plugins: [],
}
