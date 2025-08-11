// tailwind.config.ts
import type { Config } from "tailwindcss"
import daisyui from "daisyui"


const config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        portfolioDark: {
          "color-scheme": "dark",
          "base-100": "#0f0f10",
          "base-200": "#141416",
          "base-300": "#1b1c1f",
          "neutral":  "#232428",
          "primary":  "#6ee7b7",
          "secondary":"#93c5fd",
          "accent":   "#fca5a5",
          "info":     "#60a5fa",
          "success":  "#34d399",
          "warning":  "#fbbf24",
          "error":    "#f87171"
        } as const
      }
    ],
    darkTheme: "portfolioDark"
  }
} // satisfies Config

export default config

