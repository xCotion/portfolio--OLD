import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Text Colors
        'text': {
          primary: 'hsl(var(--text-primary))',
          secondary: 'hsl(var(--text-secondary))',
          body: 'hsl(var(--text-body))',
          subtle: 'hsl(var(--text-subtle))',
        },
        // Accent Colors
        'accent': {
          'light-1': 'hsl(var(--accent-light-1))',
          'light-2': 'hsl(var(--accent-light-2))',
          'primary-1': 'hsl(var(--accent-primary-1))',
          'primary-2': 'hsl(var(--accent-primary-2))',
          'dark-1': 'hsl(var(--accent-dark-1))',
          'dark-2': 'hsl(var(--accent-dark-2))',
        },
        // Background Colors
        'bg': {
          base: 'hsl(var(--background))',
          gradient: {
            from: 'hsl(var(--background-gradient-from))',
            to: 'hsl(var(--background-gradient-to))',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      backdropBlur: {
        glass: 'var(--glass-blur)',
      },
      boxShadow: {
        glow: 'var(--shadow-glow)',
        elevation: 'var(--shadow-elevation)',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config