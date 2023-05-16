/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      boxShadow: {
        "3xl": "10px 10px 40px 15px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      dropShadow: {
        "3xl": "2px 2px 8px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};