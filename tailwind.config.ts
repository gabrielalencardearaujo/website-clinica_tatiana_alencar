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
        imgDepilacao: "url('/src/assets/img/img-depilacao.png')",
      },
      boxShadow: {
        '3xl': '6px 6px 20px -3px rgba(0, 0, 0, 0.4)',
      },
      screens: {
        '3xl': '1920px',
      },
    },
    colors: {
      'color-white': '#FFF',
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

      'color-error': '#FF6347',
      'color-success': '#4a934a',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      display: ['Pinyon Script', 'sans'],
    },
    screens: {
      xm: '320px',
      sm: '420px',
      md: '768px',
      lg: '820px',
      xl: '1024px',
      xlg: '1240px',
      xxl: '1440px',
      xxxl: '1600px',
      bl: '1920px',
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
export default config;
