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
          darkMuted: '#8A8A8A',
          muted: '#878787',
        },
        bg: {
          dark: '#1E1D2B',
          light: '#F6F6F6',
          mediumDark: '#8A8A8A',
          mediumLight: '#E6F1F1',
          muted: '#62616B',
        },
      },
    },
  },
  plugins: [],
}
