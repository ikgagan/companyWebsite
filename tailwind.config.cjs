/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc6fb',
          400: '#36a6f6',
          500: '#0c87e8',
          600: '#006bc6',
          700: '#0055a1',
          800: '#004985',
          900: '#003e6f',
          950: '#00264a',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2d9e5',
          300: '#acbbd0',
          400: '#8095b5',
          500: '#5e779c',
          600: '#485e81',
          700: '#3b4c69',
          800: '#334158',
          900: '#2e394b',
          950: '#1c2230',
        },
        accent: {
          50: '#fffaeb',
          100: '#fff0c7',
          200: '#ffe08a',
          300: '#ffca4d',
          400: '#ffb020',
          500: '#fa9009',
          600: '#e06d04',
          700: '#ba4c08',
          800: '#973c0e',
          900: '#7c330f',
          950: '#461804',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
} 