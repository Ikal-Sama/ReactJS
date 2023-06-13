/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      flex: {
        '1': '1 1 0%',
        '2': '2 2 0%'
      }
    },
  },
  plugins: [],
}
