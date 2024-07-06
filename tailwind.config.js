/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html, js}'],
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
        poppins: ['Poppins, sans-serif'],
        playfair: ['Playfair Display, serif'],
      },
    },
  },
  plugins: [],
};
