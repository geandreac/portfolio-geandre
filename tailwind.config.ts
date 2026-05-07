import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:      '#2b2b38',
        bg2:     '#252532',
        bg3:     '#1f1f2b',
        card:    '#323244',
        border:  'rgba(255,255,255,0.08)',
        border2: 'rgba(255,255,255,0.15)',
        text:    '#e8e6f0',
        muted:   '#8a8aa8',
        purple:  '#c084fc',
        purple2: '#a855f7',
      },
      fontFamily: {
        sans: ['"Inter"', '"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        outfit: ['"Outfit"', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
      }
    },
  },
  plugins: [],
}

export default config;