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
          colors: {
            background: "#080809",
            foreground: "#101010",
            primary: {
              50: "#3B096C",
              100: "#FFFBDD",
              200: "#FFF5BC",
              300: "#FFEF9B",
              400: "#FFE882",
              500: "#FFDE59",
              600: "#DBB941",
              700: "#B7962C",
              800: "#93741C",
              900: "#7A5C11",
              DEFAULT: "#FFDE59",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        "lightmode": {
          colors: {
            background: "#F6F6F6",  // Light gray background
            foreground: "#333333",  // Dark gray foreground
            primary: {
              50: "#F0F7FF",         // Light blue variant
              100: "#DDEBFF",
              200: "#B7D4FF",
              300: "#8DB1FF",
              400: "#5F87FF",
              500: "#3653EB",        // Main blue color
              600: "#1D2BBF",
              700: "#0D1A8C",
              800: "#051063",
              900: "#02023A",
              DEFAULT: "#3653EB",    // Default primary color
              foreground: "#333333",
            },
            focus: "#0096FD",        // Light blue focus color
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
