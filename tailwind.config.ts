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
        "foreground-pink": "hsl(var(--foreground-pink))",
        foreground: "hsl(var(--foreground))",
        "green-ms-dos": "hsl(var(--green-ms-dos))",
        black: "hsl(var(--black))",
        "dark-blue": "hsl(var(--dark-blue))",
        "slate-600": "hsl(var(--slate-600))",
        // change
        "background-hover": "hsl(var(--teal-400))",
        "link-hover": "hsl(var(--teal-300))",
        "main-title": "hsl(var(--blue-2))",
        "content-1": "hsl(var(--slate-400))",
        "content-2": "hsl(var(--slate-400))",
        link: "hsl(var(--slate-200))",
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
