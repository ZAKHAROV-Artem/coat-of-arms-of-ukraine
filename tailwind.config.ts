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
        bg: "#1e1e1e",
        primary: "#222121",
        wheat: "#EAC91C",
        "light-gray": "#B9B9B9",
      },
    },
  },
  plugins: [],
};
export default config;
