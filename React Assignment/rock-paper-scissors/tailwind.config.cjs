/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rot: {
          '0%': {
            transform: 'scale(0.5)'
          },
          '100%': {
             transform: 'scale(1)' 
          }
        },
        inc: {
          '0%': { transform: 'scale(.5)' },
          '50%': { transform: 'scale(0.75)' },
          '100%': { transform: 'scale(1)' }
        }
      },
      animation: {
        'rot': 'rot 1500ms linear 400ms 1',
        'inc': 'inc 400ms linear 1'
      },

    },
  },
  plugins: [],
}
