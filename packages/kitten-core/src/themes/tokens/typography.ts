import type { Tokens } from '@pandacss/types';

export const fontSizes: Tokens['fontSizes'] = {
  xs: { value: '0.75rem' },
  sm: { value: '0.875rem' },
  md: { value: '1rem' },
  lg: { value: '1.125rem' },
  xl: { value: '1.25rem' },
};

export const fontWeights: Tokens['fontWeights'] = {
  thin: { value: '100' },
  extralight: { value: '200' },
  light: { value: '300' },
  normal: { value: '400' },
  medium: { value: '500' },
  semibold: { value: '600' },
  bold: { value: '700' },
  extrabold: { value: '800' },
  black: { value: '900' },
};

export const letterSpacings: Tokens['letterSpacings'] = {
  tighter: { value: '-0.05em' },
  tight: { value: '-0.025em' },
  normal: { value: '0em' },
  wide: { value: '0.025em' },
  wider: { value: '0.05em' },
  widest: { value: '0.1em' },
};

export const lineHeights: Tokens['lineHeights'] = {
  xs: { value: '1.4' },
  sm: { value: '1.45' },
  md: { value: '1.55' },
  lg: { value: '1.6' },
  xl: { value: '1.65' },
};

export const fonts: Tokens['fonts'] = {
  sans: {
    value: [
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Noto Sans"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ],
  },
  serif: {
    value: [
      'ui-serif',
      'Georgia',
      'Cambria',
      '"Times New Roman"',
      'Times',
      'serif',
    ],
  },
  mono: {
    value: [
      'ui-monospace',
      'SFMono-Regular',
      'Menlo',
      'Monaco',
      'Consolas',
      '"Liberation Mono"',
      '"Courier New"',
      'monospace',
    ],
  },
};
