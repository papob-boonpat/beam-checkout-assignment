/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nav: {
          DEFAULT: "#08154D",
          hover: "#4F70FD",
        },
      },
      fontFamily: {
        assist: ["Assistant"],
      },
    },
  },
  plugins: [],
};
