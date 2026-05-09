/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fbf6ec",
        espresso: "#28130c"
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "Arial", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 28px 70px rgba(40, 19, 12, 0.16)"
      }
    }
  },
  plugins: []
};
