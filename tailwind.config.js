const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#808080",
          darkest: "#808080",
        },
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        arabic: ["isep", "sans-serif"],
      },
    },
  },
  plugins: [],
};
