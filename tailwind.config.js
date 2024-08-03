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
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      spin: {
        "0%": { transform: "rotate(0deg)" },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
    },
    animation: {
      fadeIn: "fadeIn 600ms ease-in-out",
      spin: "spin 1s linear infinite",
    },
  },
  plugins: [],
};
