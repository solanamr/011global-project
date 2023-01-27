/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      mlg: "1130px",
      xl: "1440px"
    },
    colors: {
      black: "#000",
      blue: "#0A3871",
      blueLight: "#F3F5FC",
      white: "#fff",
      grey: "#495057",
      black2: "#252733",
      lightGrey: "#9FA2B4",
      blueGrey: "#374557",
      blue4: "#0C4969",
      grey4: "#C6C6C6",
      white2: "#FCFCFC",
      grey5: "#686868",
      red: "#FD2816"
    },
    fontFamily: {
      sans: ["Roboto ", "sans-serif !important"],
   },
    extend: {},
  },
  plugins: [],
}
