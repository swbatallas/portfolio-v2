/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 4s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px )scale(0.8)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(0.6)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.7)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(0.8)"
          }
        },

      }
    },
  },
  plugins: [],
}