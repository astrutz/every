/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
      },
      gridTemplateRows: {
        layout: 'auto auto 1fr auto',
      },
      colors: {
        gray: {
          DEFAULT: '#FFF', // Dark: 950
          50: '#f9fafb', // Dark: 900
          100: '#f3f4f6', // Dark: 800
          200: '#e5e7eb', // Dark: 700
          300: '#d1d5db', // Dark: 600
          400: '#9ca3af', // Dark: 500
          500: '#6b7280', // Dark: 400
          600: '#4b5563', // Dark: 300
          700: '#374151', // Dark: 200
          800: '#1f2937', // Dark: 100
          900: '#111827', // Dark: 50
          950: '#030712', // Dark: DEFAULT
        },
      },
    },
  },
  plugins: [],
};
