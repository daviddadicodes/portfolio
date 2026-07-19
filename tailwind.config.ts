import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        panel: "#09101f",
        line: "#1c2843",
        neon: "#67e8f9",
        arcade: "#8b5cf6",
        ember: "#f97316",
        mist: "#9fb2d9"
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        body: ["var(--font-space-grotesk)"],
        accent: ["var(--font-oxanium)"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(103,232,249,0.1), 0 18px 56px rgba(35, 113, 211, 0.12)",
        panel: "0 16px 48px rgba(1, 6, 19, 0.42)"
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseSoft: "pulseSoft 5s ease-in-out infinite",
        scan: "scan 12s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.04)" }
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(400%)" }
        }
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at top, rgba(103,232,249,0.12), transparent 24%), radial-gradient(circle at 20% 20%, rgba(139,92,246,0.14), transparent 18%), linear-gradient(180deg, #050816 0%, #030511 100%)"
      }
    }
  },
  plugins: []
};

export default config;
