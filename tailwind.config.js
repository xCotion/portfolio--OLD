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
        'bg-primary': '#111111',
        'bg-secondary': '#1A1A1A',
        'text-primary': '#F4F4F5',
        'text-secondary': '#D4D4D8',
        'text-body': '#A1A1AA',
        'text-subtle': '#71717A',
        'accent-light-1': '#A9D8F3',
        'accent-light-2': '#B3E1C3',
        'accent-primary-1': '#59C1C8',
        'accent-primary-2': '#3FB8A5',
        'accent-dark-1': '#005B57',
        'accent-dark-2': '#004E44',
      },
      animation: {
        'move': 'move 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        move: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
