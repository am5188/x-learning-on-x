import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f4f7fb",
          100: "#e8eef7",
          200: "#c9d7eb",
          300: "#9fb6d6",
          400: "#6f8fb8",
          500: "#4d6f9a",
          600: "#3a567c",
          700: "#2f4564",
          800: "#293a52",
          900: "#0b1220",
          950: "#060a12",
        },
        neon: {
          cyan: "#22d3ee",
          violet: "#a78bfa",
          pink: "#f472b6",
          lime: "#a3e635",
          amber: "#fbbf24",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 211, 238, 0.15)",
        card: "0 20px 60px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(34,211,238,0.25), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 10%, rgba(167,139,250,0.2), transparent 50%), radial-gradient(ellipse 40% 30% at 10% 20%, rgba(244,114,182,0.12), transparent 45%)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
