import { styled } from '@kitten-ui/styles/jsx';

export const ButtonRoot = styled('button', {
  base: {
    userSelect: 'none',
    fontWeight: 'semibold',
    position: 'relative',
    lineHeight: 'none',
    textAlign: 'center',
    cursor: 'pointer',
    display: 'inline-block',
  },
  variants: {
    variant: {
      default: {},
      filled: {
        colorPalette: 'blue',
        bg: { base: 'colorPalette.500', _dark: 'colorPalette.200' },
        color: { base: 'white', _dark: 'gray.900' },
      },
      light: {},
      outline: {},
      subtle: {},
      transparent: {},
      white: {},
    },
    radius: {
      xs: { borderRadius: 'xs' },
      sm: { borderRadius: 'sm' },
      md: { borderRadius: 'md' },
      lg: { borderRadius: 'lg' },
      xl: { borderRadius: 'xl' },
    },
    size: {
      xs: { h: '1.875rem', px: '0.875rem', fontSize: 'xs' },
      sm: { h: '2.25rem', px: '1.125rem', fontSize: 'sm' },
      md: { h: '2.625rem', px: '1.375rem', fontSize: 'md' },
      lg: { h: '3.125rem', px: '1.625rem', fontSize: 'lg' },
      xl: { h: '3.75rem', px: '2rem', fontSize: 'xl' },
    },
    compact: { true: {} },
  },
  compoundVariants: [
    { size: 'xs', compact: true, css: { h: '1.375rem', px: '0.4375rem' } },
    { size: 'sm', compact: true, css: { h: '1.625rem', px: '0.5rem' } },
    { size: 'md', compact: true, css: { h: '1.875rem', px: '0.625rem' } },
    { size: 'lg', compact: true, css: { h: '2.125rem', px: '0.75rem' } },
    { size: 'xl', compact: true, css: { h: '2.5rem', px: '0.875rem' } },
  ],
  defaultVariants: {
    variant: 'filled',
    size: 'sm',
    radius: 'sm',
    compact: false,
  },
});

ButtonRoot.displayName = 'ButtonRoot';
