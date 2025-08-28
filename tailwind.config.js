
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c7a589",
        dark: "#0b0b0c",
        light: "#f7f6f4",
      },
      fontFamily: {
        sans: ['Inter','ui-sans-serif','system-ui','Segoe UI','Roboto','Helvetica','Arial','Noto Sans']
      }
    },
  },
  plugins: [],
};
