/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          100: '#B4EFF9',
          300: '#66E0F0',
          400: '#33D6E8',
          500: '#00CCE0',
          800: '#007A85',
          900: '#005C63',
        },
        pink: {
          100: '#FFD6E8',
          300: '#FF99C8',
          400: '#FF6EB5',
          500: '#FF41A3',
          800: '#B3006B',
          900: '#800054',
        },
      },
    },
  },
  safelist: [
    'bg-cyan-500/20',
    'bg-pink-500/20',
    'shadow-cyan-500/20',
    'shadow-pink-500/10',
    'border-cyan-500/50',
    'border-pink-500/50',
    'hover:shadow-cyan-500/10',
    'hover:shadow-pink-500/10',
  ],
  plugins: [],
}