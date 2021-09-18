module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  
  theme: {
    extend: {

    
      zIndex: ['hover', 'active'],
      display: ['hover', 'focus'],
      fontFamily: {
          sans: ['Orbitron', 'sans-serif'],
        },
   
    },
  },
  variants: {

    scrollSnapType: ['responsive'],
    extend: {},
  },
  plugins: [require('tailwindcss-scroll-snap')],

}
