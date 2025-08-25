/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
          DEFAULT: "#E91E63", // Vibrant pink that complements the palette
          foreground: "#FFFFFF", // White for contrast
        },
        secondary: {
          DEFAULT: "#1D7874", // Teal from your palette
          foreground: "#F8F4E3", // Cream for contrast
        },
        accent: {
          DEFAULT: "#5FBFF9", // Sky Blue from your palette
          foreground: "#171D1C", // Dark for contrast
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#171D1C", // Dark Green/Black from your palette
          foreground: "#F8F4E3", // Cream for contrast
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom palette colors for direct use
        palette: {
          red: "#9A031E",
          blue: "#5FBFF9",
          cream: "#F8F4E3",
          teal: "#1D7874",
          dark: "#171D1C",
          pink: "#E91E63", // New vibrant pink
          "pink-hover": "#C2185B", // Darker pink for hover states
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "pink-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(233, 30, 99, 0.4)" },
          "50%": { boxShadow: "0 0 0 20px rgba(233, 30, 99, 0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pink-pulse": "pink-pulse 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
