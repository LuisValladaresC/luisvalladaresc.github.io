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
          css: '#364de2',
          javascript: '#f7e018',
          nunjucks: '#1e5a1e',
          handlebars: '#db7e35',
          bootstrap: '#563d7c',
          tailwindcss: '#6dbaf6',
          react: '#149eca',
          vue: '#41b883',
          nodejs: '#026e00',
          php: '#8892bf',
          laravel: '#f9322c',
          ruby: '#cc342d',
          rails: '#d30001',
          mysql: '#447e9b',
          postgresql: '#336791',
          firebase: '#ffcc30',
          webpack: '#1c78c0',
          gulp: '#cf4647',
          vite: '#646cff',
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
        'aboutme': '500px',
        'contact': '60vh',
      }
    },
  },
  plugins: [],
}