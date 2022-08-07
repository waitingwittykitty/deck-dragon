// eslint-disable-next-line
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderRadius: {
      DEFAULT: '14px',
      sm: '10px',
      lg: '24px',
    },
    extend: {
      colors: {
        yellow: '#FFF48C',
        'yellow-dark': '#EFCE4B',
        red: '#F64242',
      },
      fontFamily: {
        alfa: ['Alfa Slab One', ...defaultTheme.fontFamily.sans],
        courier: ['Courier Prime', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'extra-big': ['4rem', '5.5rem'],
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
};
