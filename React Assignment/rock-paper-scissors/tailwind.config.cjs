/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow : {
        'circle' : '0 0 15px 10px green',
        'circleGray' : '0 0 15px 5px gray',
      },
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
          '0%' : { borderColor : "red", boxShadow : '0 0 15px 10px red' },
          '10%': { borderColor: "green", boxShadow: '0 0 15px 10px green' },
          '20%': { borderColor: "red", boxShadow: '0 0 15px 10px red' },
          '30%': { borderColor: "green", boxShadow: '0 0 15px 10px green' },
          '40%': { borderColor: "red", boxShadow: '0 0 15px 10px red' },
          '50%': { borderColor: "green", boxShadow: '0 0 15px 10px green' },
          '60%': { borderColor: "red", boxShadow: '0 0 15px 10px red' },
          '70%': { borderColor: "green", boxShadow: '0 0 15px 10px green' },
          '80%': { borderColor: "red", boxShadow: '0 0 15px 10px red' },
          '90%': { borderColor: "green", boxShadow: '0 0 15px 10px green' },
          '100%': { borderColor: "red", boxShadow: '0 0 15px 10px red' }, 
        },
        colorreverse: {
          '0%': { borderColor: "green", boxShadow: '0 0 15px 10px green' },
          '10%': { borderColor: "red", boxShadow: '0 0 5px 5px red' },
          '20%': { borderColor: "green", boxShadow: '0 0 15px 10px green' },
          '30%': { borderColor: "red", boxShadow: '0 0 15px 10px red' },
          '40%': { borderColor: "green", boxShadow: '0 0 15px 10px green' },
          '50%': { borderColor: "red", boxShadow: '0 0 15px 10px red' },
          '60%': { borderColor: "green", boxShadow: '0 0 15px 10px green' },
          '70%': { borderColor: "red", boxShadow: '0 0 15px 10px red' },
          '80%': { borderColor: "green", boxShadow: '0 0 15px 10px green' },
          '90%': { borderColor: "red", boxShadow: '0 0 15px 10px red' },
          '100%': { borderColor: "green", boxShadow: '0 0 15px 10px green' },
        },
      },
      animation: {
        'inc': 'inc 400ms linear 1',
        'opac': 'opac 250ms linear 1',
        'hide': 'hide 3500ms linear 1',
        'color': 'color 3000ms linear 1',
        'colorreverse': 'colorreverse 3000ms linear 1',
      },

    },
  },
  plugins: [],
}
