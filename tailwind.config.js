/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        float: 'float 4s ease-in-out infinite',
        morph: 'morph 4s ease-in-out infinite',
        ripple: 'ripple 2s ease-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        spin: 'spin 20s linear infinite',
        gradient: 'gradient 8s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 12s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'aurora-1': 'aurora1 15s ease infinite',
        'aurora-2': 'aurora2 15s ease infinite',
        'aurora-3': 'aurora3 15s ease infinite',
        'slide-line': 'slide-line 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '0%' },
          '50%': { borderRadius: '30%' },
        },
        ripple: {
          '0%': { transform: 'scale(0.9)', opacity: '1' },
          '100%': { transform: 'scale(1.1)', opacity: '0' },
        },
        pulse: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        aurora1: {
          '0%, 100%': { transform: 'translateY(-20%) translateX(-10%)' },
          '50%': { transform: 'translateY(20%) translateX(10%)' },
        },
        aurora2: {
          '0%, 100%': { transform: 'translateY(20%) translateX(10%)' },
          '50%': { transform: 'translateY(-20%) translateX(-10%)' },
        },
        aurora3: {
          '0%, 100%': { transform: 'translateY(-20%) translateX(10%)' },
          '50%': { transform: 'translateY(20%) translateX(-10%)' },
        },
        'slide-line': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      fontFamily: {
        'spaceGrotesk': ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

