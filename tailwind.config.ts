import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pixel-perfect Axiom Palette
        axiom: {
          bg: '#0B0E11',      // Deepest background
          column: '#111417',  // Column background
          border: '#1E2329',  // Subtle borders
          muted: '#707A8A',   // Secondary text
          up: '#0ECB81',      // Axiom green (Price up)
          down: '#F6465D',    // Axiom red (Price down)
          accent: '#2B66FB',  // Trade button blue
        }
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
      // Animation for the "Shimmer" loading state
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
