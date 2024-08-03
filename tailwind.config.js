/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      fadeOut: {
        "0%": { opacity: 1 },
        "100%": { opacity: 0 },
      },
      spin: {
        "0%": { transform: "rotate(0deg)" },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
    },
    animation: {
      spin: "spin 1s linear infinite",
      fadeIn: "fadeIn 1s forwards",
      fadeOut: "fadeOut 1s forwards",
    },
  },
  plugins: [],
};
