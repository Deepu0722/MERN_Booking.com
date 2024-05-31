/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",  "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        blue:{
          800: '#003b95',
        },
      },
    },
    container: {
      padding: {
        md:"10rem",
      },
    },
  },
  plugins: [],
}

