import type { Config } from 'tailwindcss';

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
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'color-base-0': '#FEF6F6',
      'color-base-1': '#FFD7D7',
      'color-base-2': '#F4CDC8',
      'color-base-3': '#FFC1C2',
      'color-base-4': '#FFB6B7',
      'color-base-5': '#FBA5A6',
      'color-base-6': '#F590A0',
      'color-base-7': '#F3637C',
      'color-base-8': '#9F2E41',
      'color-base-9': '#552930',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
};
export default config;
