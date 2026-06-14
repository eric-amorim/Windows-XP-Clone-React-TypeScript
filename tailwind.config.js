/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tahoma: ['Tahoma', 'sans-serif'],
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(300%)' },
        }
      },
      animation: {
        slide: 'slide 1.5s linear infinite',
      }
    },
  },
  plugins: [],
}