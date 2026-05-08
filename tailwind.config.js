/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf8ed',
          100: '#f9edcc',
          200: '#f2d98a',
          300: '#ecc04a',
          400: '#e5a820',
          500: '#c8860d',
          600: '#a86a08',
          700: '#8a500a',
          800: '#6f3f10',
          900: '#5c3410',
        },
        olive: {
          700: '#4a4a2a',
          800: '#3a3a1f',
          900: '#2d2d18',
        }
      },
    },
  },
  plugins: [],
};
