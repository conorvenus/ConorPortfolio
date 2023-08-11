/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'text': '#fff',
      'text-secondary': '#B3B3B3',
      'background': '#0C0F27'
    },
    extend: {},
  },
  plugins: [],
}