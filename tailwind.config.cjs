/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
      },
    },
    extend: {
      colors: {
        "m-blue": "#007bff",
        "m-indigo": "#6610f2",
        "m-purpel": "#6f42c1",
        "m-pink": "#e83e8c",
        "m-red": "#dc3545",
        "m-orange": "#fd7e14",
        "m-yellow": "#ffc107",
        "m-green": "#28a745",
        "m-teal": "#20c997",
        "m-cyan": "#17a2b8",
        "m-white": "#fff",
        "m-gray": "#6c757d",
        "m-gray-dark": "#343a40",
        "m-primary": "#007bff",
        "m-secondary": " #6c757d",
        "m-success": "#28a745",
        "m-info": "#17a2b8",
        "m-warning": "#ffc107",
        "m-danger": " #dc3545",
        "m-light": "#f8f9fa",
        "m-dark": "#343a40",
      },
      fontFamily: {
        roboto: ["Roboto", 'sans-serif'],
        poppins: ["Poppins", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
