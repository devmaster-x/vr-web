import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        '2xl': '1440px',
        'wd': '1600px',
      },
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
      }
    },
  },
  plugins: [],
}

export default config
