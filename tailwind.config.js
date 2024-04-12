/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "anton": ["Anton", 'sans-serif']
      },
      gridTemplateRows: {
        'home': '1fr 10fr',
      },
      gridTemplateColumns: {
        'home-content': '1fr 4fr 1fr'
      }
    },
  },
  plugins: [],
}

