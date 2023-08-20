import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('@tailwindcss/forms')],
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
    translate: {
      "center": "-50%",
    },
    colors: {
      primary: "#263AC1",
      grey: "#E8E8E8",
      black: "#040215",
      pale: "#909090",
      error: "#EB0D3F",
      white: "#FFFFFF",
      brown: "#444444",
      blue: "#E8F5FF",
      backdrop: "rgba(0, 0, 0, 0.40)",
      electric: "#DC143C",
      divide: "#DEDEDE",
    }
  },
}
export default config
