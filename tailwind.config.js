module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["'DM Sans'", "sans-serif"],
        stardos: ["'Stardos Stencil'", "cursive"],
      },
      colors: {
        blueDark: "#0E1229",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
