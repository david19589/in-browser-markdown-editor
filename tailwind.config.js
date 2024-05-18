/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Roboto Slab", "serif"],
        mono: ["Roboto Mono", "monospace"],
      },
    },
    screens: {
      mobile: "372px",
      tablet: "768px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
