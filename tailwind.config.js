/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient-slow': 'gradient 16s ease infinite',
        'rotate-word': 'rotate-word 2.6s ease-in-out forwards',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'rotate-word': {
          '0%': { opacity: '0', transform: 'translateY(70%) scale(0.96)' },
          '10%': { opacity: '1', transform: 'translateY(0) scale(1)' },
          '85%': { opacity: '1', transform: 'translateY(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(-65%) scale(0.96)' },
        },
      },
    },
  },
  plugins: [],
}

