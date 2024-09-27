/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter",
      },
      colors: {
        primary: "#272A22", // Custom primary color
      },
    },
  },
  plugins: [],
};
