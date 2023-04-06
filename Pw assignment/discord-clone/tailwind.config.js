/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily : {
      'newFont': 'Bebas Neue'
    },
    backgroundImage: {
      'bgLeft': "url('./assets/bgLeft.svg')"
    }
  },
  plugins: [],
}

