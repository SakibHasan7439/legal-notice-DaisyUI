/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        Garamond:['"EB Garamond"', "serif"]
      },

      colors: {
        'custom-dark': 'rgb(17, 17, 17)',
      },
    },
  },
  plugins: [require('daisyui')]
}

