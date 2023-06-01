import { ThemeConfig } from '@twind/core';
import { TailwindTheme } from '@twind/preset-tailwind';
import { colors } from './colors';

export type DefaultTheme = {
  config: { primaryColor: keyof typeof colors };
  colors: typeof colors;
} & TailwindTheme;

export const theme: ThemeConfig<DefaultTheme> = {
  extend: {
    colors,
    spacing: {
      'xs/2': '0.3125rem', // 5px
      xs: '0.625rem', // 10px
      sm: '0.75rem', // 12px
      md: '1rem', // 16px
      lg: '1.25rem', // 20px
      xl: '1.5rem', // 24px
    },
    borderRadius: {
      DEFAULT: '0.25rem', // 12px
      none: '0px',
      xs: '0.125rem',
      sm: '0.25rem',
      md: '0.5rem',
      lg: '1rem',
      xl: '2rem',
      '1/2': '50%',
      full: '9999px',
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      md: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      h1: ['2.125rem', '1.3'],
      h2: ['1.625rem', '1.35'],
      h3: ['1.375rem', '1.4'],
      h4: ['1.125rem', '1.45'],
      h5: ['1rem', '1.5'],
      h6: ['0.875rem', '1.5'],
    },
    opacity: {
      65: '0.65',
      35: '0.35',
    },
  },
};
