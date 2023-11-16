import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#e26a92",
        "secondary": "#eaa4b4",
        "accent": "#9faf08",
        "neutral": "#1f1d25",
        "base-100": "#f0f1f4",
        "info": "#536dca",
        "success": "#145c35",
        "warning": "#f3a144",
        "error": "#f02314",
        },
      },
    ],
  },
}
export default config
