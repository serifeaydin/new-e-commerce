/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#96E9FB',
        'custom-green': '#ABECD6',
      },
    },
  },
  plugins: [],
}