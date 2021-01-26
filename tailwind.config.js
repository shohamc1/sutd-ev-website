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
      white: {
        focus: "#fff",
      },
      blue: {
        nav: "#428cfb",
        focus: "#23286b",
      },
      yellow: {
        focus: "#f1b522",
        hover: "#d59f00",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
