/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          cyan: "#22d3ee",
          blue: "#3b82f6",
          green: "#34d399",
          slate: "#0b1220"
        }
      },
      boxShadow: {
        glow: "0 0 30px rgba(34, 211, 238, 0.25)"
      },
      fontFamily: {
        sans: ["Segoe UI", "system-ui", "sans-serif"],
        mono: ["Consolas", "Menlo", "Monaco", "monospace"]
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: [],
};
