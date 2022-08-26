/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        darkcolor: '#363636',
        lightcolor: '#F5F5F5',
        graytext: '#777777'
      }
    },
  },
  plugins: [],
}
