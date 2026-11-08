import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7A45',
        'primary-dark': '#E85D2A',
        secondary: '#22C6A3',
        accent: '#FFD166',
        dark: '#101922',
        darker: '#081016',
        light: '#EEF6FB',
        gray: '#9AB0BD',
        surface: '#13212B',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,122,69,0.18), 0 20px 55px rgba(0,0,0,0.38)',
      },
      animation: {
        float: 'float 18s infinite ease-in-out',
        'pulse-slow': 'pulse 3s infinite',
        'bg-drift': 'bg-drift 22s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'bg-drift': {
          '0%': { transform: 'translate3d(0,0,0) scale(1)' },
          '100%': { transform: 'translate3d(2%, -2%, 0) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
