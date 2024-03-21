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
        display: ["Madimi One", 'sans-serif', ...defaultTheme.fontFamily.sans],
        sans: ["Quicksand", 'sans-serif', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

