/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js, ts, tsx }","./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xxs': '320px', // Extra-extra small devices
        'xs': '360px', // Extra small devices (phones)
        //=>@media (min-width:360px)
        'sm': '640px', // Small devices (phones)
        //=>@media (min-width:640px)
        'md': '768px', // Medium devices (tablets)
        //=>@media (min-width:768px)
        'lg': '1024px', // Large devices (desktops)
        //=>@media (min-width:1024px)
        'xl': '1280px', // Extra large devices (large desktops)
        //=>@media (min-width:1280px)
        '2xl': '1536px', // 2xl screens
        //=>@media (min-width:1536px)
        // You can add more custom screen sizes if needed
        '4xl': '1920px', // 4xl screens or large desktops
        '5xl': '2560px', // 5xl screens or larger monitors
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

