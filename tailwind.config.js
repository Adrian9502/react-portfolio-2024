/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bright-purple": "#8000FF",

        "bright-violet": "#8A2BE2",
      },
    },
  },
  plugins: [],
};
