/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1628',
          mid: '#142040',
        },
        gold: {
          DEFAULT: '#D4A853',
          light: '#F0C97A',
        },
        cream: '#FAF7F0',
        surface: '#111827',
        muted: '#6B7280',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      keyframes: {
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'beam-slide': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'blur-in': {
          '0%': { opacity: '0', filter: 'blur(12px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        aurora: 'aurora 15s ease infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'beam-slide': 'beam-slide 4s linear infinite',
        marquee: 'marquee var(--marquee-duration, 30s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--marquee-duration, 30s) linear infinite',
        'blur-in': 'blur-in 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
