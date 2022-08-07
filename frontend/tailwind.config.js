// eslint-disable-next-line
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#FFF48C',
        red: '#F64242',
      },
      fontFamily: {
        alfa: ['Alfa Slab One', ...defaultTheme.fontFamily.sans],
        courier: ['Courier Prime', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
