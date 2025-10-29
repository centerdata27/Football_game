/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue}", // This is a common pattern
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}