/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        inc: {
          '0%': { transform: 'scale(.5)' },
          '50%': { transform: 'scale(0.75)' },
          '100%': { transform: 'scale(1)' }
        },
        opac : {
          '0%': { opacity: '0' },
          '50%': { opacity: '0'},
          '75%': { opacity : '0'},
          '100%': { opacity: '1' }
        },
        hide: {
          '0%': { opacity: '0' },
          '50%': { opacity : '0'},
          '75%' : { opacity : '0'},
          '100%': { opacity: '1' }
        },
        color : {
          '0%' : { borderColor : "red" },
          '10%': { borderColor: "green" },
          '20%': { borderColor: "red" },
          '30%': { borderColor: "green" },
          '40%': { borderColor: "red" },
          '50%': { borderColor: "green" },
          '60%': { borderColor: "red" },
          '70%': { borderColor: "green" },
          '80%': { borderColor: "red" },
          '90%': { borderColor: "green"},
          '100%': { borderColor: "red"}, 
        },
        colorreverse: {
          '0%': { borderColor: "green" },
          '10%': { borderColor: "red" },
          '20%': { borderColor: "green" },
          '30%': { borderColor: "red" },
          '40%': { borderColor: "green" },
          '50%': { borderColor: "red" },
          '60%': { borderColor: "green" },
          '70%': { borderColor: "red" },
          '80%': { borderColor: "green" },
          '90%': { borderColor: "red" },
          '100%': { borderColor: "green" },
        },
      },
      animation: {
        'inc': 'inc 400ms linear 1',
        'opac': 'opac 250ms linear 1',
        'hide': 'hide 4500ms linear 1',
        'color': 'color 4000ms linear 1',
        'colorreverse': 'colorreverse 4000ms linear 1',
      },

    },
  },
  plugins: [],
}
