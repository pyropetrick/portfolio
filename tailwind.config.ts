import type { Config } from 'tailwindcss'

const config: Config = {
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
    },
    fontFamily: {
      sans: "var(--font-somic)",
    },
    colors: {
      primary: "#263AC1",
      grey: "#E8E8E8",
      black: "#040215",
      pale: "#909090",
      error: "#EB0D3F",
      white: "#FFFFFF"
    }
  },
  plugins: [],
}
export default config
