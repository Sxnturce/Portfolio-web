/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bn13bouncy: {
          '0%': {
            top: '0em',
          },
          '40%': {
            top: '0em',
          },
          '43%': {
            top: '-0.9em',
          },
          '46%': {
            top: '0em',
          },
          '48%': {
            top: '-0.4em',
          },
          '50%': {
            top: '0em',
          },
          '100%': {
            top: '0em',
          },
        },
      },
      animation: {
        bn13bouncy: 'bn13bouncy 5s infinite linear',
      },
    },
  },
  plugins: [
    require("tailwindcss-animated")
  ],
}