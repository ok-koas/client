import daisyui from "daisyui";
import { night, light } from "daisyui/src/theming/themes";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			"seymour-one": "Seymour One",
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			"night",
			{
				night: {
					...night,
					primary: "#EC221F",
					"primary-content": "white",
					"pale-blue": "#BFDFFE",
					secondary: "aqua",
					"secondary-content": "black",
					accent: "#152238",
					"accent-content": "white",
					neutral: "#23395d",
					"neutral-content": "white",
					footer: "#4779C4",
					"footer-content": "white",
					"primary-gray": "gray",
					".menu li > *:not(ul):not(.menu-title):not(details).active": {
						color: "neutral-content",
						"background-color": "neutral",
					},
					".menu li > *:not(ul):not(.menu-title):not(details):hover": {
						"background-color": "#BFDFFE",
						color: "#000000",
					},
				},
			},
			"light",
			{
				light: {
					...light,
					primary: "#EC221F",
					"primary-content": "#EFF7FF",
					"pale-blue": "#BFDFFE",
					secondary: "#28666E",
					"secondary-content": "white",
					accent: "#eff6ff",
					"accent-content": "black",
					neutral: "white",
					"neutral-content": "black",
					footer: "#BFDFFE",
					"footer-content": "black",
					"secondary-gray": "gray-700",
					".menu li > *:not(ul):not(.menu-title):not(details).active": {
						color: "#000000",
						"background-color": "white",
					},
					".menu li > *:not(ul):not(.menu-title):not(details):hover": {
						"background-color": "#BFDFFE",
						color: "#000000",
					},
				},
			},
		],
	},
};
