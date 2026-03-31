/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: "#0C0C0C",
        graphite: "#1A1A1A",
        gold: "#D4AF37",
        bone: "#F5F5F5",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
