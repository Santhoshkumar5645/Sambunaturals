/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
   
    extend: {
      colors: {
        'primary':'#74A02F',
        'secondary':'#EDF6EA',
        'white':'#FFFFFF',
        'black':'#000000',
       },
      fontFamily:{
        "AVENIR":['Avenirltstd', 'sans-serif'],
       
      }
    },
  },
  plugins: [ 
    require('tailwind-scrollbar-hide')
  ],
}
