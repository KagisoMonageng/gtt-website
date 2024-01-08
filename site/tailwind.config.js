/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {},
    screens:{
      'lg': '992px',
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
]
}
