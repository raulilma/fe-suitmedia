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
      'white': '#ffffff',
      'footer': '#333333',
      'soft': '#bfbfbf',
      'softgray': '#f4f4f4'
    },
    extend: {},
  },
  plugins: [],
}