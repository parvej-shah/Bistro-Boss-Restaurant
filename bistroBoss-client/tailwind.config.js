/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: "#151515",
        secondaryText:"#D99904",
        navText:"#EEFF25"
      }
    },
  },
  plugins: [require('daisyui'),],
}