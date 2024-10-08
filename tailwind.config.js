/** @type {import('tailwindcss').Config} */
export default {

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1B263B",
        accentColor: "#F39C12",
        secondaryColor: "#BDC3C7",
        lightAccentColor: "#fef5e7",
        darkPrimary: "#181002",
        lightBorder: "#4d4d4d",
      },
    },
  },
  plugins: [],
  darkMode: 'selector'
};
