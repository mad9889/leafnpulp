/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // This is important
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
