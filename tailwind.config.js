/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html, js}'],
  theme: {
    extend: {colors : {
      primaryColor : '#70C2C9',
      secondaryColor : '#ACDFE2',
      thirdColor : '#345E85',
      fourthColor : '#FFD73D',
    },
      fontFamily :{
        poppins:['Poppins, sans-serif'],
        playfair:['Playfair Display, serif'],
      }
    },
  },
  plugins: [],
}

