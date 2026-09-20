import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#f3f7f4",
          100: "#e4efe6",
          200: "#caddce",
          300: "#a4c2ac",
          400: "#79a384",
          500: "#578663",
          600: "#436a4d",
          700: "#36553e",
          800: "#2d4433",
          900: "#26392c",
          950: "#131f17",
        },
        sand: {
          50: "#faf8f5",
          100: "#f4f0e8",
          200: "#e8dfce",
          300: "#d9caa9",
          400: "#c7b182",
          500: "#b59b63",
          600: "#9e8150",
          700: "#7d6540",
          800: "#655237",
          900: "#534430",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F3E5AB",
          dark: "#AA820A",
        }
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
