import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        ['sky-blue']: '#BEE2FD',
        denim: '#022959',
        bg: '#EFF5FF',
        ['light-blue']: '#ABBCFF',
        grey: '#9699AA',
      }
    }
  },
  plugins: [],
}

export default config
