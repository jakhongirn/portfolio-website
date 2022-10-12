/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", './public/index.html'
  ],
  important: true,
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
