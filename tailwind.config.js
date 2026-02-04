/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          theme_color: '#fca600',
          bg_color: '#141414',
          text_color: '#000',
          white_color: '#fff',
          footer_color: '#fca600',
      }
    },
  },
  plugins: [],
}
