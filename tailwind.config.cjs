/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        salmon: {
          50: '#FCDCD9',
          100: '#FF9185',
          200: '#F04C39',
        }
      },
    },
  },
  plugins: [],
}
