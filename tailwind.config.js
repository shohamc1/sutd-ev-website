module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["DM Sans"],
    },
    fontSize: {
      header: ["18px"],
    },
    colors: {
      blue: {
        nav: "#428cfb",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
