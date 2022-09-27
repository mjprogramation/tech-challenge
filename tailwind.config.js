/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
