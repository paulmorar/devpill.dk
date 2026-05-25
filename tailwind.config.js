/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eefaff",
          100: "#d9f2ff",
          200: "#bce8ff",
          300: "#8edaff",
          400: "#59c1ff",
          500: "#33a3ff",
          600: "#1c83f5",
          700: "#176ae0",
          800: "#1955b3",
          900: "#1a488d",
        },
        ink: {
          950: "#05060a",
          900: "#0a0c14",
          800: "#0f111c",
          700: "#161a28",
          600: "#1f2436",
        },
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        marquee: "marquee 40s linear infinite",
        aurora: "aurora 18s ease infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-30px) scale(1.1)" },
          "66%": { transform: "translate(-30px,20px) scale(0.95)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
