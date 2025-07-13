/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sage: '#9CAF88',
        eucalyptus: '#7A9B76',
        ivory: '#FDF8F0',
        blush: '#F4E6E7',
        moss: '#5A6B47',
        dew: '#E8F0F2',
        twilight: '#2D3748',
        golden: '#F7E7CE'
      },
      fontFamily: {
        script: ['Dancing Script', 'cursive'],
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'petal-fall': 'petal-fall 4s ease-in-out infinite',
        'bloom': 'bloom 0.8s ease-out forwards',
        'grow': 'grow 2s ease-out forwards'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'petal-fall': {
          '0%': { transform: 'translateY(-20px) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100px) rotate(360deg)', opacity: '0' }
        },
        bloom: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        grow: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'bottom' }
        }
      }
    },
  },
  plugins: [],
}