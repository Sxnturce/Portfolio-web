/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
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
        movement: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(5px, 5px) rotate(5deg)' },
          '50%': { transform: 'translate(0, 0) rotate(0deg)' },
          '75%': { transform: 'translate(-5px, 5px) rotate(-5deg)' },
          '100%': { transform: 'translate(0, 0) rotate(0deg)' },
        },
      },
      animation: {
        bn13bouncy: 'bn13bouncy 5s infinite linear',
        subirBajar: "subirBajar 3s ease-in-out infinite",
        movement: 'movement 2s ease-in-out  infinite',
      },
      dropShadow: {
        'light-gray': '0 4px 8px rgba(0, 0, 0, 0.3)',
        'dark-gray': '0 4px 6px rgba(0, 0, 0, 0.5)',
      },
      screens: {
        "2md": "920px",
        "xs": "360px"
      },
      colors: {
        "border-smoke": "#1f1f1f",
        "background-dark": "#171718",
        "bg-nav": "#181818",
        "bg-white": "#ffffff",
        "color-hero": "#706fd3",
        "dark-color-hero": "#282542",
        "color-smoke": "#e1e1e1",
        "color-smoke-high": "#d7d7d7",
        "text-smoke": "#bfbfbf",
        "color-office": "#b6bdf7",
        "color-date": "#a4b2cf",
        "color-line": "#f1f1f133",
        "color-sphere": "#dce7f7",
        "color-skill": "#333",
        "bg-nav-mobile": "#1a1a1a"
      }
    },
  },
  plugins: [
    require("tailwindcss-animated")
  ],
}