/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    fontSize: {
      'sm': ['15px', '18.9px'],
      'base': ['16px', '20.16px'],
      'xl': ['18px', "26px"],
      '2xl': ['22px', "27.72px"],
    },
    extend: {
      colors: {
        "main-blue": "#0D192C",
        "main-blue2": "#15263F",
        "main-text": "#8BACD9",
        "main-light": "#00FFF8",
      },
      screens: {
        'sm400': '400px',
        "lg1300": "1300px"
      },
    },
  },
  plugins: [],
};
