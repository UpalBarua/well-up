import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '0.75rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        neutral: {
          '50': '#aec3d0',
          '100': '#9eb7c7',
          '200': '#87a7ba',
          '300': '#6490a6',
          '400': '#496b7e',
          '500': '#384e61',
          '600': '#36465e',
          '700': '#36415e',
          '800': '#293247',
          '900': '#181e2a',
          '950': '#040506',
        },
        primary: {
          '50': '#edfbff',
          '100': '#d6f4ff',
          '200': '#b7edff',
          '300': '#85e5ff',
          '400': '#4bd4ff',
          '500': '#22b8ff',
          '600': '#0a9bff',
          '700': '#0486f8',
          '800': '#0b68c2',
          '900': '#0f5899',
          '950': '#0f365c',
        },
        secondary: {
          '50': '#fef9ec',
          '100': '#fcecc9',
          '200': '#f9d78e',
          '300': '#f6bd53',
          '400': '#f5ab3b',
          '500': '#ee8212',
          '600': '#d2600d',
          '700': '#af410e',
          '800': '#8e3212',
          '900': '#752a12',
          '950': '#431405',
        },
        ternary: {
          '50': '#fff6ed',
          '100': '#ffead4',
          '200': '#ffd0a8',
          '300': '#ffaf71',
          '400': '#ff7e31',
          '500': '#fe6011',
          '600': '#ef4507',
          '700': '#c63008',
          '800': '#9d280f',
          '900': '#7e2410',
          '950': '#440e06',
        },
        warning: {
          '50': '#fff1f0',
          '100': '#ffe1de',
          '200': '#ffc7c2',
          '300': '#ffa097',
          '400': '#ff6a5c',
          '500': '#ff3c29',
          '600': '#f92713',
          '700': '#d21503',
          '800': '#ad1507',
          '900': '#8e190e',
          '950': '#4e0801',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
