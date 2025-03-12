/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "Futura-light": ["Futura-light", "italic"],
        "Futura-Bold": ["Futura-Bold", "sans-serif"],
        "Futura-Medium": ["Futura-Medium", "sans-serif"],
        Blantickscript: ["Blantick", "sans-serif"],
      },
    },
  },
  plugins: [],
};
