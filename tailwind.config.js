/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage:{
        'all-bg': "url('/src/Media/allBG.jfif')",
        'all-bg2': "url('/src/Media/stacked-steps-haikei.png')",
      },
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},
        secondary: {"100":"#8A8A8A","200":"#737373","300":"#5C5C5C","400":"#454545","500":"#2E2E2E","600":"#171717","700":"#000000"},
      },
      fontFamily:{
        arial:'Arial',
        roboto:'Roboto',
        segoe:'Segoe UI',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
