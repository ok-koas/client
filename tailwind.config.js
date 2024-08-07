const { default: daisyui } = require("daisyui");

module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			"seymour-one": "Seymour One",
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			"light",
			{
				light: {
					...require("daisyui/src/theming/themes").light,
					primary: "#EC221F",
					"primary-content": "#EFF7FF",
					"secondary-bg": "#BFDFFE",
					secondary: "#28666E",
					"secondary-content": "white",
					accent: "#F4E409",
					"accent-content": "#160C28",
				},
			},
		],
	},
};
