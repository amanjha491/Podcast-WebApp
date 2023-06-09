/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          gray: "#9fafca",
          lg: "#ffff",
          lgHover: "#143d59",
          green: "#143d59",
        },
        side: {
          whitege: "#D1D5DB",
          bub: "#0e0e0e",
        },
      },
    },
  },
  plugins: [],
};
