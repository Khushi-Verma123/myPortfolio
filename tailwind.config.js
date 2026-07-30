/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        google: {
          blue: '#4285F4',
          red: '#EA4335',
          yellow: '#FBBC05',
          green: '#34A853',
          dark: '#1F1F1F',
          surface: '#F8F9FA',
          border: '#E0E0E0',
          'dark-surface': '#121212',
          'dark-card': '#1E1E1E',
          'dark-border': '#2D2D2D',
        },
        primary: {
          50: '#E8F0FE',
          100: '#D2E3FC',
          200: '#A6C8FF',
          300: '#78A9FF',
          400: '#4285F4',
          500: '#1A73E8',
          600: '#1557B0',
          700: '#103F91',
          800: '#0C2B6B',
          900: '#071842',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'Roboto Mono', 'monospace'],
      },
      boxShadow: {
        'material-sm': '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)',
        'material-md': '0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)',
        'material-lg': '0 2px 6px 0 rgba(60,64,67,0.15), 0 8px 24px 4px rgba(60,64,67,0.15)',
        'glow-blue': '0 0 20px rgba(66, 133, 244, 0.35)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
