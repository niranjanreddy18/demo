/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        cement: {
          50: '#f8f8f7',
          100: '#efefed',
          200: '#dcdbd8',
          300: '#c4c2bd',
          400: '#a8a49d',
          500: '#8c887f',
          600: '#726d64',
          700: '#5c5750',
          800: '#4a4640',
          900: '#3c3933',
          950: '#1e1c18',
        }
      }
    },
  },
  plugins: [],
}
