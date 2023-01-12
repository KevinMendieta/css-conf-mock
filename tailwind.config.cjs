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
          10: '#F7EFEE',
          50: '#FCDCD9',
          100: '#FF9185',
          200: '#F04C39',
        },
        text: {
          dark: '#1E1D2B',
          light: '#F6F6F6',
          muted: '#878787',
        }
      },
    },
  },
  plugins: [],
}
