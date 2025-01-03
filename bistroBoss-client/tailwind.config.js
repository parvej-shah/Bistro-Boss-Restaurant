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
        navText:"#EEFF25",
        secondaryBg:"#F3F3F3",
        btnBgHover:"#1F2937",
        btnBg:"#E8E8E8",
      }
    },
  },
  plugins: [require('daisyui'),],
}