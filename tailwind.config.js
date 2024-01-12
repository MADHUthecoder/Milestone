const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Luckiest Guy"],
      },
      backgroundImage: {
        hero: "url('./src/assets/navbg.jpeg')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("daisyui")],
};
