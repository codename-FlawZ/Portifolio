/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main_bg: '#DC273D',
        bg_darkcolor: '#BB2A45',
        text_main: '#E6AD22',
        text_highlight: '#1F4797',
        text_highlight_dark: '#213463',
        bg_dark: '#2D2933',
        menu_bg: 'rgba(0, 0, 0, 0.75)',
        menu_border: 'rgba(255, 255, 255, 0.25)',
        home_bg: 'rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}