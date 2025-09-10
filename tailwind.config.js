/** @type {import('tailwindcss').Config} */

import {
  contest2016,
  contest2017,
  contest2018,
  contest2019,
  contest2021,
  contest2022,
  contest2023,
  contest2024,
  contest2025,
} from './src/app/sites/eurovision/data/contests.data';

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
          primary: contest2025.colours[0],
          secondary: contest2025.colours[1],
          primaryText: contest2025.colours[2],
          secondaryText: contest2025.colours[3],
        },
        contest2024: {
          primary: contest2024.colours[0],
          secondary: contest2024.colours[1],
          primaryText: contest2024.colours[2],
          secondaryText: contest2024.colours[3],
        },
        contest2023: {
          primary: contest2023.colours[0],
          secondary: contest2023.colours[1],
          primaryText: contest2023.colours[2],
          secondaryText: contest2023.colours[3],
        },
        contest2022: {
          primary: contest2022.colours[0],
          secondary: contest2022.colours[1],
          primaryText: contest2022.colours[2],
          secondaryText: contest2022.colours[3],
        },
        contest2021: {
          primary: contest2021.colours[0],
          secondary: contest2021.colours[1],
          primaryText: contest2021.colours[2],
          secondaryText: contest2021.colours[3],
        },
        contest2019: {
          primary: contest2019.colours[0],
          secondary: contest2019.colours[1],
          primaryText: contest2019.colours[2],
          secondaryText: contest2019.colours[3],
        },
        contest2018: {
          primary: contest2018.colours[0],
          secondary: contest2018.colours[1],
          primaryText: contest2018.colours[2],
          secondaryText: contest2018.colours[3],
        },
        contest2017: {
          primary: contest2017.colours[0],
          secondary: contest2017.colours[1],
          primaryText: contest2017.colours[2],
          secondaryText: contest2017.colours[3],
        },
        contest2016: {
          primary: contest2016.colours[0],
          secondary: contest2016.colours[1],
          primaryText: contest2016.colours[2],
          secondaryText: contest2016.colours[3],
        },
      },
    },
  },
  plugins: [],
};
