/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'birusa-violet': '#4a017d',
        'birusa-green': '#80c41c',
        'birusa-blue': '#0083ad',
        'birusa-blue-dark': '#004f75',
        'birusa-blue-light': '#4ac1e0',
        'birusa-blue-semilight': '#00aedd',
      },
      fontFamily: {
        MN: ['var(--font-MN)'],
        MNWide: ['var(--font-MNWide)'],
        MNExpanded: ['var(--font-MNExpanded)'],
      },
    },
  },
  plugins: [],
}
