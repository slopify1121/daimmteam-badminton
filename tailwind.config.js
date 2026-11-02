/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1528',
          dark: '#070D18',
          surface: '#111F38',
          royal: '#1E3A8A',
          blue: '#2563EB',
          lightBlue: '#60A5FA',
          gold: '#F59E0B',
          goldHover: '#D97706',
          goldLight: '#FEF3C7',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

