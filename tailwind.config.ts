import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: '#e8ff4a', hover: '#b8cc30' },
        surface: {
          1: '#0a0a0a', 2: '#111111', 3: '#161616', 4: '#1c1c1c',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter:  '-0.04em',
        tight:    '-0.03em',
      },
    },
  },
  plugins: [],
} satisfies Config