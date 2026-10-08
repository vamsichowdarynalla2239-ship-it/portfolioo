/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream:  { DEFAULT: '#FAF8F4', dark: '#F0EBE1', darker: '#E5DDD0' },
        ink:    { DEFAULT: '#1C1917', light: '#2C2825', soft: '#57534E' },
        stone:  { 200: '#E7E3DA', 300: '#D4CDC3', 400: '#A8A29E', 500: '#78716C', 600: '#57534E' },
        gold:   { DEFAULT: '#C9A84C', light: '#E4C46A', dark: '#A08430' },
        // keep for any leftover usage
        violet: { 600: '#7C3AED', 700: '#6D28D9' },
        surface: { 50: '#FAF8F4', 100: '#F0EBE1' },
      },
      fontFamily: {
        sans:    ['DM Sans', 'system-ui', 'sans-serif'],
        serif:   ['Playfair Display', 'Georgia', 'serif'],
        hand:    ['Caveat', 'cursive'],
        mono:    ['Space Grotesk', 'monospace'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'card':      '0 2px 16px rgba(28,25,23,0.06)',
        'card-hover':'0 6px 30px rgba(28,25,23,0.12)',
        'ink':       '0 4px 20px rgba(28,25,23,0.25)',
        'gold':      '0 0 20px rgba(201,168,76,0.30)',
        // legacy aliases
        'glow-emerald':    '0 0 20px rgba(201,168,76,0.20)',
        'glow-emerald-lg': '0 0 30px rgba(201,168,76,0.25)',
        'light-card':      '0 2px 16px rgba(28,25,23,0.06)',
      },
      animation: {
        'spin-slow':     'spin 20s linear infinite',
        'bounce-subtle': 'bounceSubtle 3s ease-in-out infinite',
        'float':         'float 4s ease-in-out infinite',
      },
      keyframes: {
        bounceSubtle: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
        float:        { '0%,100%': { transform: 'translateY(0) rotate(-1deg)' }, '50%': { transform: 'translateY(-8px) rotate(1deg)' } },
      },
    },
  },
  plugins: [],
}
