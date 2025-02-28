/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors:{
        primary: "#34d399",
        secondary: "#10b981",
        accent: "#059669"
      },
    },
  },
  plugins: [],
}

