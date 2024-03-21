import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  prefix: 'bc-',
  theme: {
    extend: {
      fontFamily: {
        display: "var(--bc-font-display)",
        sans: "var(--bc-font-base)"
      }
    },
  },
  plugins: [],
}

