import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-ms-dos": "hsl(var(--green-ms-dos))",
        "dark-blue": "hsl(var(--dark-blue))",
        // change
        "background-hover": "hsl(var(--teal-400))",
        // "link-hover": "hsl(var(--teal-300))",
        "link-hover": "hsl(var(--text-secondary))",
        "main-title": "hsl(var(--blue-2))",
        "content-1": "hsl(var(--light-blue-2))",
        "content-2": "hsl(var(--blue-3))",
        link: "hsl(var(--blue-2))",
        background: "hsl(var(--dark-blue))",
        "background-secondary": "hsl(var(--yale-blue))",
        "text-secondary": "hsl(var(--text-secondary))",
        border: "hsl(var(--light-blue-2))",
      },
      fontFamily: {
        sans: ["var(--font-unbounded)"],
        montserrat: ["var(--font-montserrat)"],
        "ms-dos": ["var(--font-ms-dos)"],
        "exo-2": ["var(--font-exo-2)"],
        "main-title": ["var(--font-main-title)"],
        common: ["var(--font-common)"],
        "body-font": ["var(--font-common)"],
      },
      animation: {
        "spin-fast": "spin 1s linear infinite",
        "shake-fast": "shake 1s ease-in-out 59s infinite",
        wiggle: "wiggle 0.1s ease-in-out infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shake: {
          "0%, 1%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-10px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(10px)" },
          "2%, 100%": { transform: "translateX(0)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
