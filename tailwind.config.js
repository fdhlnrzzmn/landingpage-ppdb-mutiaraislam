/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html, js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryColor: '#70C2C9',
        secondaryColor: '#edfeff',
        thirdColor: '#0f1729',
        fourthColor: '#FFD73D',
        fifthColor: '#70C4CA',
        sixthColor: '#001938',
      },
      fontFamily: {
        sans: ['Dynapuff', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
