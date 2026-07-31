import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EEF2F8",
          100: "#D7E0EF",
          200: "#AFC1DF",
          300: "#87A2CF",
          400: "#5F84BF",
          500: "#3D66A6",
          600: "#2A4E85",
          700: "#1C3763",
          800: "#132849", // primary deep navy
          900: "#0D1D37",
          950: "#081225",
        },
        gold: {
          50: "#FDF7EA",
          100: "#FAEBC7",
          200: "#F4D68F",
          300: "#EDBE5C",
          400: "#E3A73C", // star gold accent
          500: "#CC8F26",
          600: "#A8721B",
          700: "#805517",
          800: "#5C3D13",
          900: "#3A270D",
        },
        coral: {
          50: "#FCEEEC",
          100: "#F8D6D1",
          200: "#EFAA9F",
          300: "#E37F6E",
          400: "#D66252", // muted healthcare red accent
          500: "#C24C3C",
          600: "#9E3B2E",
          700: "#772C22",
        },
        mist: {
          50: "#F6F9FC",
          100: "#EEF3F9", // subtle light blue section bg
          200: "#DCE6F1",
          300: "#C3D4E6",
        },
        cream: {
          DEFAULT: "#FBF8F3", // soft warm white background
          100: "#FDFCFA",
          200: "#F5EFE4",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        clinic: "14px",
        "clinic-lg": "18px",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(13, 29, 55, 0.06)",
        card: "0 4px 20px rgba(13, 29, 55, 0.08)",
        lifted: "0 12px 32px rgba(13, 29, 55, 0.14)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
