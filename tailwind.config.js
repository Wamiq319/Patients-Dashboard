/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btnColor: "#01F0D0",
        txtColor: "#072635",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"], // Add Manrope font family
      },
    },
  },
  plugins: [],
};
