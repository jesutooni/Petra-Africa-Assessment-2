module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["'DM Sans'", "sans-serif"],
        stardos: ["'Stardos Stencil'", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
