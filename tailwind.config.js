/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif', ], // Set Poppins as the default sans font
      },
      colors: {
        customOr1: '#EF4B25', // Add your custom color
        customYellow1: '#0D9648',
        navtextblack: '#1F2937',
        customBlack2: '191919',
        customBlack1: '#0D0D0D'
      },
    },
  },
  plugins: [],
}