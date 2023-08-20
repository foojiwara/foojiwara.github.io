import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        mono: ["Roboto Mono Variable", ...defaultTheme.fontFamily.mono],
      },
      animation: {
        "gradient-x": "gradient-x 4s ease infinite",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
    keyframes: {
      "gradient-x": {
        "0%, 100%": {
          "background-size": "200% 200%",
          "background-position": "left center",
        },
        "50%": {
          "background-size": "200% 200%",
          "background-position": "right center",
        },
      },
      "fade-in": {
        "0%": {
          opacity: "0",
          transform: "translateY(4rem)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
    },
  },
  plugins: [typography()],
} satisfies Config;
