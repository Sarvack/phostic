const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      fontFamily: {
        phostic: ['Ubuntu']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
