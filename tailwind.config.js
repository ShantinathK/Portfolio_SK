/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '50px 35px 60px -15px rgba(455, 567, 509, 1)',
      }
    },
  },
  plugins: [],
}

