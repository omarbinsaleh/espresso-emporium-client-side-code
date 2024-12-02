/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('./src/assets/images/more/15.jpg')",
        hero: "url('./src/assets/images/more/3.png')",
        'add-coffee': "url('./src/assets/images/more/11.png')",
        'popular-coffee': "url('./src/assets/images/more/1.png')",
      },
      fontFamily: {
        rancho: ["Rancho", "cursive"]
      },
      colors: {
        primary: '#E3B577',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}