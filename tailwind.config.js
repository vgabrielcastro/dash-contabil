/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1E90FF',
        black: '#242424',
        gray: '#e5e5e5',
      },
      fontFamily: {
        'sans': ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

