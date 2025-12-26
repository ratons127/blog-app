/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9ebff",
          200: "#bad9ff",
          300: "#8fc0ff",
          400: "#5fa0ff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a"
        },
        accent: {
          500: "#f97316",
          600: "#ea580c"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-sora)", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(15, 23, 42, 0.3)"
      }
    }
  },
  plugins: []
};
