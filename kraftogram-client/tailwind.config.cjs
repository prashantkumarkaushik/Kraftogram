// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-1': '#001919',
        'bg-2': '#002626',
        'bg-3': '#003333',
        'bg-4': '#004040',
        'text-1': '#2DB6C1',
        'text-2': '#6ccbd3',
        'regal-blue': '#243c5a',
        'background': '#0B2631'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
        'silk': ['Silkscreen', 'sans-serif']
      }
    },
  },
  plugins: [],
}
