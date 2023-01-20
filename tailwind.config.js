/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    display: ["group-hover"]
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000000',
      'blue': '#5696c2',
      'red': '#ff0000',
      'white': '#ffffff',
      'footer': '#333333',
      'soft': '#bfbfbf',
      'softgray': '#f4f4f4',
      'hardgray': '#444444',
      'slider': '#878787',
      'box-inno': '#ea7c6f',
      'box-inno-outer': '#e3594a',
      'box-loyalty': '#6a996f',
      'box-loyalty-outer': '#58805d',
      'box-respect': '#5696c2',
      'box-respect-outer': '#4180ad',
    },
    extend: {},
  },
  plugins: [],
}