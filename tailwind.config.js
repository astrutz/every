/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif']
      },
      gridTemplateRows: {
        layout: 'auto auto 1fr auto'
      }
    },
  },
  plugins: [],
}
