/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#324158',
          DEFAULT: '#333b50', // Blue "Peacoat"
          dark: '#0a1124',
        },
        secondary: {
          DEFAULT: '#bec7d5', // Gray "Lavender Gray"
          dark: '#939dab'
        },
        tertiary: '#00d646', // Green "Malachite"
        technology: {
          html: '#ff7d00',
          css: '#0096d1',
          javascript: '#f7e018',
          bootstrap: '#563d7c',
          nunjucks: '#1e5a1e',
          nodejs: '#026e00',
          php: '#8892bf',
          mysql: '#447e9b',
          firebase: '#ffcc30',
          gulp: '#cf4647',
          git: '#f14e32',
          github: '#24292f',
          gitlab: '#f96424',
        },
      },
      fontSize: {
        '2xs': '0.625rem', // 10px
      },
      spacing: {
        'navbar': '3.75rem', // 60px
      },
      minHeight: {
        'contact': '60vh',
      }
    },
  },
  plugins: [],
}