/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    borderRadius: {
      'large': '30px',
      "full": "999px"
    },
    fontSize: {
      "xsm": "14px",
      'sm': '15px',
      'base': '16px',
      'xl': "24px",
      '2xl': '28px'
    },
    extend: {
      colors: {
        "main-orange": "#FC7614",
        "main-gray1": "#181E27",
        "main-gray2": "#232A34",
        "main-very-dark-blue": "#131518",
        "main-dark-blue": "#262E38",
        "main-gray-light": "#969FAD",
        "main-gray-medium": "#7C8798",
      },
      screens: {
        'sm400': '400px',
        "lg1300": "1300px"
      },
      letterSpacing: {
        'wide': '2px',
      }
    },
  },
  plugins: [],
};
