/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)']
      },
      fontSize: {
        '2xs': '0.65rem',
        '3xs': '0.55rem',
        '4xs': '0.45rem'
      },
      maxWidth: {
        '7xl': '80rem',
        '8xl': '96rem',
        '9xl': '104rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('tailwind-scrollbar')]
};
