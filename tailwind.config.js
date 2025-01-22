import { space } from "postcss/lib/list";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#10B981",
          2: "#F5F5F5",
          3: "#D9D9D9",
          4: "#93CEBA",
          5: "#09593F",
        },
      },
      fontFamily: {
        dokdo: "var(--font-dokdo)",
        inter: "var(--font-inter)",
        spaceMono: "var(--font-space-mono)",
      },
    },
  },
  plugins: [],
};
