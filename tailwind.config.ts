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
        "background-pink": "hsl(var(--background-pink))",
        "foreground-pink": "hsl(var(--foreground-pink))",
        foreground: "hsl(var(--foreground))",
        "green-ms-dos": "hsl(var(--green-ms-dos))",
        black: "hsl(var(--black))",
        "dark-blue": "hsl(var(--dark-blue))",
        "teal-300": "hsl(var(--teal-300))",
        "slate-600": "hsl(var(--slate-600))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
    },
  },
  plugins: [],
};
export default config;
