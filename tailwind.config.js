/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
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
