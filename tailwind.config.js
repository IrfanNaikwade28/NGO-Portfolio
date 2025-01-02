/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "tiro":"Tiro Devanagari Marathi",
        'outfit':"Outfit",
      },
      colors:{
        smText:"#21040A"
      },
      backgroundImage: {
        'hero-font-gradient': 'linear-gradient(90deg,#E3265A 0%,#EBCD5F 100%)',
      },
    },
  },
  plugins: [],
}