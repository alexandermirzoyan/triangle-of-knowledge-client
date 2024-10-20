import type { Config } from 'tailwindcss';
import { palette } from './src/constants/palette';
import { createThemeSelector } from './src/utils';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: createThemeSelector({ color: palette.purple }),
        grey: createThemeSelector({ color: palette.grey }),
        info: createThemeSelector({ color: palette.info }),
        warning: createThemeSelector({ color: palette.warning }),
        success: createThemeSelector({ color: palette.success }),
        danger: createThemeSelector({ color: palette.danger }),
      },
      boxShadow: {
        dropdown: ' 0px 4px 20px 0px #00000042',
      },
      fontFamily: {
        raleway: ['var(--font-raleway)'],
        montserrat: ['var(--font-montserrat)'],
      },
      fontSize: {
        h1: [
          '48px',
          {
            lineHeight: '1',
            fontWeight: 'bold',
          },
        ],
        h2: [
          '32px',
          {
            lineHeight: '1',
            fontWeight: 'bold',
          },
        ],
        h3: [
          '24px',
          {
            lineHeight: '1',
            fontWeight: 'regular',
          },
        ],
        h4: [
          '20px',
          {
            lineHeight: '1',
            fontWeight: 'semibold',
          },
        ],
        'body-lg': [
          '18px',
          {
            lineHeight: '28px',
          },
        ],
        'body-md': [
          '16px',
          {
            lineHeight: '22px',
          },
        ],
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};
export default config;
