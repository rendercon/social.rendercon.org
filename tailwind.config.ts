import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        krona: ["var(--font-krona)"],
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        md: "0 4px 8px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      colors: {
        pleb: {
          100: "#B9BFFF",
          200: "#8B74BD",
          300: "#7953A9",
          400: "#4066EO",
          500: "#663399",
          600: "#22277A",
          700: "#00BAA5",
        },
        rendercon: {
          orange: "#ffbf54",
          yellow: "#f9f871",
          deeporange: "#ff865d",
          pink: "#f05274",
          purplelighter: "#ba348d",
          deeppurple: "#663399",
          wordings: "#ffbf55",
          buttons: " #663398",
        },
      },
    },
  },
  plugins: [
    // @ts-ignore
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config;
