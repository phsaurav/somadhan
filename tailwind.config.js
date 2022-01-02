const colors = require("tailwindcss/colors");
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

	theme: {
		letterSpacing: {
			wide: ".01em",
			wider: ".05em",
			widest: ".5em",
		},
		screens: {
			sm: "480px",
			md: "1024px",
			lg: "1080px",
			xl: "1440px",
		},
		colors: {
			green: colors.green,
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray,
			bluegray: colors.blueGray,
			indigo: colors.indigo,
			red: colors.rose,
			yellow: colors.amber,
			orange: colors.orange,
			blue: colors.blue,
			lime: colors.lime,
			brand: {
				1: "#1e1e1e",
				2: "#666666",
				3: "#000000",
				4: "#ffffff",
				5: "#A1A1AA",
				6: "#333333",
				7: "#f8f8f8",
				8: "#ececec",
				9: "#deae5d",
				10: "#f5e5c8",
				11: "#e7e7e7",
				12: "#ff4e4e",
			},
		},
		fontFamily: {},
		fontSize: {
			xs: ".75rem",
			sm: ".875rem",
			tiny: ".875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
			"7xl": "5rem",
			"8xl": "7rem",
			"9xl": "9rem",
			"10xl": "12rem",
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
