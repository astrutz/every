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
        contest2025: {
          primary: '#4e1c8f',
          secondary: '#0adad8',
          primaryText: '#ffffff',
          secondaryText: '#4e1c8f',
        },
        contest2024: {
          primary: '#f6d915',
          secondary: '#ff46e0',
          primaryText: '#000000',
          secondaryText: '#000000',
        },
        contest2023: {
          primary: '#03035d',
          secondary: '#e5df25',
          primaryText: '#ffffff',
          secondaryText: '#000000',
        },
        contest2022: {
          primary: '#540c16',
          secondary: '#2d2e39',
          primaryText: '#ffffff',
          secondaryText: '#ffffff',
        },
        contest2021: {
          primary: '#070838',
          secondary: '#f86bcf',
          primaryText: '#ffffff',
          secondaryText: '#000000',
        },
        contest2019: {
          primary: '#0072d4',
          secondary: '#ffffff',
          primaryText: '#ffffff',
          secondaryText: '#000000',
        },
        contest2018: {
          primary: '#003e71',
          secondary: '#ffc646',
          primaryText: '#ffffff',
          secondaryText: '#000000',
        },
        contest2017: {
          primary: '#190540',
          secondary: '#fb1544',
          primaryText: '#ffffff',
          secondaryText: '#000000',
        },
        contest2016: {
          primary: '#17394F',
          secondary: '#910291',
          primaryText: '#ffffff',
          secondaryText: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};
