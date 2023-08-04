import { styled } from '@kitten-ui/styles/jsx';

/* default colorPalette */
const colorPalette = 'blue';

export const ButtonRoot = styled('button', {
  base: {
    userSelect: 'none',
    fontWeight: 'semibold',
    position: 'relative',
    lineHeight: 'none',
    textAlign: 'center',
    cursor: 'pointer',
    display: 'inline-block',
    borderRadius: 'sm',
    border: '1px solid',
    borderColor: 'transparent',

    _disabled: {
      cursor: 'not-allowed!',
      bg: 'Button.disabled.bg!',
      color: 'Button.disabled.color!',
      transform: 'unset!',
    },
  },
  variants: {
    variant: {
      default: {
        bg: {
          base: 'Button.default.bg',
          _hover: 'Button.default.bgHover',
          _active: 'Button.default.bgActive',
        },
        color: 'Button.default.color',
        borderColor: 'Button.default.borderColor',
      },
      filled: {
        colorPalette,
        bg: {
          base: 'colorPalette.ButtonFilled',
          _hover: 'colorPalette.ButtonFilledHover',
          _active: 'colorPalette.ButtonFilledActive',
        },
        color: 'white',
      },
      light: {
        colorPalette,
        bg: {
          base: 'colorPalette.ButtonLight',
          _hover: 'colorPalette.ButtonLightHover',
          _active: 'colorPalette.ButtonLightActive',
        },
        color: 'colorPalette.ButtonLightColor',
      },
      outline: {},
      subtle: {},
      transparent: {},
      white: {},
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
    variant: 'light',
    size: 'sm',
    compact: false,
  },
});

ButtonRoot.displayName = 'ButtonRoot';
