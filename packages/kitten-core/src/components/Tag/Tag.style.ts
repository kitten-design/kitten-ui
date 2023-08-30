import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { cva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';

const colorPalette = 'pink';

const TagRootStyles = cva({
  base: {
    rounded: 'xl',
    WebkitTapHighlightColor: 'transparent',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    w: 'auto',
    fontWeight: 'bold',
    letterSpacing: '0.0156rem',
    cursor: 'inherit',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    border: '0.0625rem solid',
    borderColor: 'Common.borderColor',
  },
  variants: {
    variant: {
      default: {
        bg: 'Button.default.bg',
        color: 'Button.default.color',
        borderColor: 'Button.default.borderColor',
      },
      filled: {
        colorPalette,
        bg: 'colorPalette.ButtonFilled',
        color: 'white',
        border: 'none',
      },
      light: {
        colorPalette,
        bg: 'colorPalette.ButtonLight',
        color: 'colorPalette.ButtonLightColor',
        border: 'none',
      },
      outline: {
        colorPalette,
        bg: 'transparent',
        color: 'colorPalette.ButtonOutline',
        borderColor: 'colorPalette.ButtonOutline',
      },
      transparent: {
        colorPalette,
        bg: 'transparent',
        color: 'colorPalette.ButtonLightColor',
        border: 'none',
      },
      white: {
        colorPalette,
        bg: 'white',
        color: 'colorPalette.ButtonFilled',
        border: 'none',
      },
      gradient: {
        colorPalette,
        gradientFrom: 'colorPalette.400',
        gradientTo: 'colorPalette.800',
        bgGradient: 'to-br',
        color: 'white',
        border: 'none',
      },
    },
    size: {
      xs: {
        h: '1rem',
        px: '0.375rem ',
        fontSize: '0.5625rem',
        lineHeight: '0.875rem',
      },
      sm: {
        h: '1.125rem',
        px: '0.5rem ',
        fontSize: '0.625rem',
        lineHeight: '1rem',
      },
      md: {
        h: '1.25rem',
        px: '0.625rem',
        fontSize: '0.6875rem',
        lineHeight: '1.125rem',
      },
      lg: {
        h: '1.625rem',
        px: '0.75rem',
        fontSize: '0.8125rem',
        lineHeight: '1.5rem',
      },
      xl: { h: '2rem', px: '1rem', fontSize: '1rem', lineHeight: '1.875rem' },
    },
    fullWidth: {
      true: {
        w: '100%',
        display: 'flex',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'filled',
  },
});

export type TagRootVariants = RecipeVariantProps<typeof TagRootStyles>;
export type TagRootProps = HTMLStyledProps<'div'>;
export const TagRoot = styled('div', TagRootStyles);
TagRoot.displayName = 'TagRoot';

// | 'filled'
// | 'light'
// | 'outline'
// | 'dot'
// | 'transparent'
// | 'white'
// | 'default'
// | 'gradient';
