/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  keyframes: {
    typing: {
      from: { width: "0%" },
      to: { width: "100%" },
    },
    blink: {
      "0%, 100%": { borderColor: "transparent" },
      "50%": { borderColor: "white" },
    },
  },
  animation: {
    typing: "typing 2.5s steps(20) forwards, blink .7s infinite",
  },
},
  },
  plugins: [],
};
