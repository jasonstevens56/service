import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0F4C81",
        serviceBlue: "#1EA7FF",
        action: "#FF7A00",
        soft: "#F7F9FC",
        ink: "#1F2937"
      },
      boxShadow: {
        card: "0 18px 50px rgba(15, 76, 129, 0.12)"
      }
    }
  },
  plugins: []
};
export default config;
