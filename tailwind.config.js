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
        subirBajar: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        shake: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.02)' },
          '75%': { transform: 'scale(0.95)' },
        },
      },
      animation: {
        bn13bouncy: 'bn13bouncy 5s infinite linear',
        subirBajar: "subirBajar 3s ease-in-out infinite",
        shakeCustom: 'shake 3s ease-in-out  infinite',
      },
      dropShadow: {
        'light-gray': '0 4px 8px rgba(0, 0, 0, 0.3)',
        'dark-gray': '0 4px 6px rgba(0, 0, 0, 0.5)',
      },
      screens: {
        "2md": "920px"
      }
    },
  },
  plugins: [
    require("tailwindcss-animated")
  ],
}