import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { cva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';

const colorPalette = 'blue';

const ActionIconRootStyles = cva({
  base: {
    lineHeight: 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    userSelect: 'none',
    cursor: 'pointer',
    borderRadius: 'sm',
    border: '1px solid',
    borderColor: 'transparent',

    _disabled: {
      cursor: 'not-allowed!',
      '&[data-loading=false]': {
        bg: 'Button.disabled.bg!',
        color: 'Button.disabled.color!',
        borderColor: 'transparent',
      },
    },
    '&[data-loading=true]': {
      cursor: 'not-allowed',
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
      outline: {
        colorPalette,
        bg: {
          base: 'transparent',
          _hover: 'colorPalette.ButtonOutlineHover',
          _active: 'colorPalette.ButtonOutlineActive',
        },
        color: 'colorPalette.ButtonOutline',
        borderColor: 'colorPalette.ButtonOutline',
      },
      subtle: {
        colorPalette,
        bg: {
          base: 'transparent',
          _hover: 'colorPalette.ButtonLightHover',
          _active: 'colorPalette.ButtonLightActive',
        },
        color: 'colorPalette.ButtonLightColor',
      },
      transparent: {
        colorPalette,
        bg: 'transparent',
        color: 'colorPalette.ButtonLightColor',
      },
      white: {
        colorPalette,
        bg: {
          base: 'white',
          _hover: 'Button.white.bgHover',
          _active: 'Button.white.bgActive',
        },
        color: 'colorPalette.ButtonFilled',
      },
      gradient: {
        colorPalette,
        gradientFrom: 'colorPalette.400',
        gradientTo: 'colorPalette.600',
        bgGradient: 'to-br',
        color: 'white',
        border: 'none',
      },
    },
    size: {
      xs: {
        h: '1.125rem',
        minH: '1.125rem',
        w: '1.125rem',
        minW: '1.125rem',
        '& svg': { w: '0.75rem', h: '0.75rem' },
      },
      sm: {
        h: '1.375rem',
        minH: '1.375rem',
        w: '1.375rem',
        minW: '1.375rem',
        '& svg': { w: '0.875rem', h: '0.875rem' },
      },
      md: {
        h: '1.75rem',
        minH: '1.75rem',
        w: '1.75rem',
        minW: '1.75rem',
        '& svg': { w: '1.125rem', h: '1.125rem' },
      },
      lg: {
        h: '2.125rem',
        minH: '2.125rem',
        w: '2.125rem',
        minW: '2.125rem',
        '& svg': { w: '1.625rem', h: '1.625rem' },
      },
      xl: {
        h: '2.75rem',
        minH: '2.75rem',
        w: '2.75rem',
        minW: '2.75rem',
        '& svg': { w: '2.125rem', h: '2.125rem' },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'filled',
  },
});

export type ActionIconRootVariants = RecipeVariantProps<
  typeof ActionIconRootStyles
>;
export type ActionIconRootProps = HTMLStyledProps<'button'>;
export const ActionIconRoot = styled('button', ActionIconRootStyles);
ActionIconRoot.displayName = 'ActionIconRoot';
