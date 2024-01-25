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
        "primary-black": "#1c1d20",
      },
      backgroundImage: {},
    },
    screens: {
      md: "640px",
      // => @media (min-width: 640px) { ... }

      xl: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }

      desktop2: "1400px",

      wide: "1900px",
    },
  },
  plugins: [],
};
export default config;
