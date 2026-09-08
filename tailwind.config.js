/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        lake: {
          950: '#081C2B',
          900: '#0B2E45',
          700: '#123F5C',
          500: '#1C6E8C',
          300: '#4E9BB8',
        },
        foam: { 100: '#E8F1F2', 200: '#C9D9DC' },
        catch: { gold: '#E8A33D' },
        alert: { coral: '#E8654C' },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        'flash-big-catch': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(232, 101, 76, 0)' },
          '50%': { boxShadow: '0 0 0 8px rgba(232, 101, 76, 0.35)' },
        },
        'toast-in': {
          '0%': { transform: 'translateY(-12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'flash-big-catch': 'flash-big-catch 0.9s ease-in-out 2',
        'toast-in': 'toast-in 0.25s ease-out',
      },
    },
  },
  plugins: [],
}