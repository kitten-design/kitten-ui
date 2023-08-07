import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { cva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';
import type { SystemStyleObject } from '@kitten-ui/styles/types';

/* default colorPalette */
const colorPalette = 'blue';

export const buttonRootStyles = cva({
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
      '&[data-loading=false]': {
        bg: 'Button.disabled.bg!',
        color: 'Button.disabled.color!',
        borderColor: 'transparent',
      },
    },
    '&[data-loading=true]': {
      cursor: 'not-allowed!',
      pointerEvents: 'none',
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
        h: '1.875rem',
        pl: { base: '0.875rem', '&[data-left]': 'calc(0.875rem / 1.5)' },
        pr: { base: '0.875rem', '&[data-right]': 'calc(0.875rem / 1.5)' },
        fontSize: 'xs',
      },
      sm: {
        h: '2.25rem',
        pl: { base: '1.125rem', '&[data-left]': 'calc(1.125rem / 1.5)' },
        pr: { base: '1.125rem', '&[data-right]': 'calc(1.125rem / 1.5)' },
        fontSize: 'sm',
      },
      md: {
        h: '2.625rem',
        pl: { base: '1.375rem', '&[data-left]': 'calc(1.375rem / 1.5)' },
        pr: { base: '1.375rem', '&[data-right]': 'calc(1.375rem / 1.5)' },
        fontSize: 'md',
      },
      lg: {
        h: '3.125rem',
        pl: { base: '1.625rem', '&[data-left]': 'calc(1.625rem / 1.5)' },
        pr: { base: '1.625rem', '&[data-right]': 'calc(1.625rem / 1.5)' },
        fontSize: 'lg',
      },
      xl: {
        h: '3.75rem',
        pl: { base: '2rem', '&[data-left]': 'calc(2rem / 1.5)' },
        pr: { base: '2rem', '&[data-right]': 'calc(2rem / 1.5)' },
        fontSize: 'xl',
      },
    },
    compact: { true: {} },
    fullWidth: { true: { display: 'block', w: 'full' } },
  },
  compoundVariants: [
    {
      size: 'xs',
      compact: true,
      css: {
        h: '1.375rem',
        pl: { base: '0.4375rem', '&[data-left]': 'calc(0.4375rem / 1.5)' },
        pr: { base: '0.4375rem', '&[data-right]': 'calc(0.4375rem / 1.5)' },
      } as SystemStyleObject,
    },
    {
      size: 'sm',
      compact: true,
      css: {
        h: '1.625rem',
        pl: { base: '0.5rem', '&[data-left]': 'calc(0.5rem / 1.5)' },
        pr: { base: '0.5rem', '&[data-right]': 'calc(0.5rem / 1.5)' },
      } as SystemStyleObject,
    },
    {
      size: 'md',
      compact: true,
      css: {
        h: '1.875rem',
        pl: { base: '0.625rem', '&[data-left]': 'calc(0.625rem / 1.5)' },
        pr: { base: '0.625rem', '&[data-right]': 'calc(0.625rem / 1.5)' },
      } as SystemStyleObject,
    },
    {
      size: 'lg',
      compact: true,
      css: {
        h: '2.125rem',
        pl: { base: '0.75rem', '&[data-left]': 'calc(0.75rem / 1.5)' },
        pr: { base: '0.75rem', '&[data-right]': 'calc(0.75rem / 1.5)' },
      } as SystemStyleObject,
    },
    {
      size: 'xl',
      compact: true,
      css: {
        h: '2.5rem',
        pl: { base: '0.875rem', '&[data-left]': 'calc(0.875rem / 1.5)' },
        pr: { base: '0.875rem', '&[data-right]': 'calc(0.875rem / 1.5)' },
      } as SystemStyleObject,
    },
  ],
  defaultVariants: {
    variant: 'filled',
    size: 'sm',
    compact: false,
    fullWidth: false,
  },
});

export type ButtonRootVariants = RecipeVariantProps<typeof buttonRootStyles>;
export type ButtonRootProps = HTMLStyledProps<'button'>;
export const ButtonRoot = styled('button', buttonRootStyles);
ButtonRoot.displayName = 'ButtonRoot';

export const ButtonInnerStyles = cva({
  base: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
});

export type ButtonInnerProps = HTMLStyledProps<'div'>;
export const ButtonInner = styled('div', ButtonInnerStyles);
ButtonInner.displayName = 'ButtonInner';

export const ButtonLoadingStyles = cva({
  base: {
    cursor: 'not-allowed',
    bg: { base: 'rgba(255, 255, 255, 0.5)', _dark: 'rgba(26, 27, 30, 0.5)' },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '-0.0625rem',
    right: '-0.0625rem',
    bottom: '-0.0625rem',
    left: '-0.0625rem',
  },
});

export type ButtonLoadingProps = HTMLStyledProps<'div'>;
export const ButtonLoading = styled('div', ButtonLoadingStyles);
ButtonLoading.displayName = 'ButtonLoading';
