/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./component/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        menu: ".65rem",
        btnPrj: ".80rem",
      },
      colors: {
        "menu-txt": "#424242",
        disabled: "#cccccc",
      },
      dropShadow: {
        about: "10px 35px 35px rgb(160, 0, 210))",
      },
    },
  },
  plugins: [],
};
