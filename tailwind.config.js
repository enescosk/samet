/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50:  '#fdf8ec',
          100: '#faecc8',
          200: '#f3d98a',
          300: '#ecc24c',
          400: '#dcae3b',
          500: '#c8a24a',
          600: '#a88532',
          700: '#866826',
          800: '#5f4a1c',
          900: '#3b2e12',
        },
        ink: {
          900: '#050507',
          800: '#0a0a10',
          700: '#111118',
          600: '#1a1a24',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-16px)' },
        },
      },
    },
  },
  plugins: [],
}
