/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        navigation: `auto 1fr 3rem auto`,
        header: "1fr 2fr",
        mainContent: "1fr 2fr",
        skills: "repeat(auto-fill, minmax(120px, 1fr))",
      },
      gridAutoColumns: {
        skill: "minmax(130px, 1fr)",
      },
      gridAutoRows: {
        skill: "minmax(120px, 1fr)",
      },
      colors: {
        primaryGreen: "#1A422A",
        secondaryGreen: "#DCFDD8",
        primaryPink: "#e5bdd5",
        portfolio_error: "#d1132f",
        portfolio_white: "#FEFEFE",
        portfolio_grey_dark: "#292724",
        portfolio_grey_light: "#282828",
        portfolio_blue: "#502CE3",
      },
      transitionTimingFunction: {
        buttonHover: "cubic-bezier(0.5, 0, 0, 1)",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
        width: "width",
      },
      boxShadow: {
        btn_hover: " 0 0 10px 0 rgba(0, 0, 0, 0.3)",
      },
      screens: {
        xs: { min: "240px", max: "374px" },
        xxs: { min: "350px", max: "639px" },
      },
    },
  },
  plugins: [],
};
