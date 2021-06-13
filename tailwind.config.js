module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "awesome-color": "#56b890",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
