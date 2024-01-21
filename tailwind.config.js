// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "darkmode": {
          extend: "dark",
          backgroundColor: {
            transparent: 'transparent',
          },
          colors: {
            background: "#070707",      // Dark background
            foreground: "#FFFFFF",      // White foreground
            primary: {
              50: "#F0F0F0",            // Light gray variant
              100: "#E0E0E0",
              200: "#C0C0C0",
              300: "#A0A0A0",
              400: "#808080",
              500: "#666666",
              600: "#4D4D4D",
              700: "#333333",
              800: "#1A1A1A",
              900: "#000000",            // Black variant
              DEFAULT: "#F0F0F0",       // Default light gray color
              foreground: "#000000",
            },
            focus: "#FFFFFF",           // White focus color
          },
        },
        "lightmode": {
          colors: {
            background: "#F6F6F6",      // Light gray background
            foreground: "#333333",      // Dark gray foreground
            primary: {
              50: "#FFFFFF",            // White variant
              100: "#F0F0F0",
              200: "#E0E0E0",
              300: "#C0C0C0",
              400: "#A0A0A0",
              500: "#808080",
              600: "#666666",
              700: "#4D4D4D",
              800: "#333333",
              900: "#1A1A1A",            // Dark gray variant
              DEFAULT: "#101010",       // Default white color
              foreground: "#333333",
            },
            focus: "#FFFFFF",           // White focus color
          },
        },
      }
      
    }),
  ],
};
