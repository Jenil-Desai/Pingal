import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Pingal custom colors
        pingal: {
          blue: "#a5c4fd",
          purple: "#d8b4fe",
          green: "#a7f3d0",
          pink: "#fbcfe8",
          neon: "#22d3ee",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 15px 5px rgba(165, 196, 253, 0.2)",
          },
          "50%": {
            boxShadow: "0 0 25px 10px rgba(165, 196, 253, 0.4)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 3s infinite",
        float: "float 6s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-pattern":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24H0v-1.41zM0 3.07l2.83-2.83 1.41 1.41L1.41 4.48H0V3.07zM17.76 40l2.83-2.83 1.41 1.41L19.17 40h-1.41zM17.76 22.24l2.83-2.83 1.41 1.41L19.17 22.24h-1.41zM17.76 4.48l2.83-2.83 1.41 1.41L19.17 4.48h-1.41zM35.52 40l2.83-2.83 1.41 1.41L37.93 40h-2.41zM35.52 22.24l2.83-2.83 1.41 1.41L37.93 22.24h-2.41zM35.52 4.48l2.83-2.83 1.41 1.41L37.93 4.48h-2.41zM1.41 19.17l2.83 2.83-1.41 1.41L0 20.59v-1.41h1.41zM19.17 37.93l2.83 2.83-1.41 1.41-2.83-2.83v-1.41h1.41zM1.41 37.93l2.83 2.83-1.41 1.41L0 39.34v-1.41h1.41zM19.17 1.41l2.83 2.83-1.41 1.41-2.83-2.83V1.41h1.41zM1.41 1.41l2.83 2.83-1.41 1.41L0 2.83V1.41h1.41zM37.93 19.17l2.83 2.83-1.41 1.41-2.83-2.83v-1.41h1.41zM37.93 1.41l2.83 2.83-1.41 1.41-2.83-2.83V1.41h1.41zM19.17 19.17l2.83 2.83-1.41 1.41-2.83-2.83v-1.41h1.41zM37.93 37.93l2.83 2.83-1.41 1.41-2.83-2.83v-1.41h1.41z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
