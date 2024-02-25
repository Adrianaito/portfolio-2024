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
        border: "hsl(var(--outer-space))",
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
