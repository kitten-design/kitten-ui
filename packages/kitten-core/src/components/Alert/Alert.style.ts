import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { cva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';

const colorPalette = 'blue';

const AlertRootStyles = cva({
  base: {
    border: '0.0625rem solid',
    px: 'xl',
    py: 'md',
    overflow: 'hidden',
    position: 'relative',
    '& [data-alert-wrapper]': { display: 'flex' },
    '& [data-alert-icon]': {
      lineHeight: 1,
      w: '1.25rem',
      h: '1.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      mr: 'md',
      mt: '0.0625rem',
    },
    '& [data-alert-body]': { flex: 1 },
    '& [data-alert-title]': {
      mb: 'xs',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 'sm',
      fontWeight: 'bold',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      '&[data-with-clos-button]': {
        pr: 'md',
      },
    },
    '& [data-alert-message]': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      fontSize: 'sm',
    },
    '& [data-alert-close-button]': {
      w: '1.25rem',
      h: '1.25rem',
      mr: '-md',
      mt: '-xs',
    },
  },
  variants: {
    variant: {
      default: {
        bg: 'Button.default.bg',
        color: 'Button.default.color',
        borderColor: 'Button.default.borderColor',

        '& [data-with-clos-button]': {
          color: 'Button.default.color',
        },
        '& [data-alert-message]': {
          color: 'Button.default.color',
        },
      },
      filled: {
        colorPalette,
        bg: 'colorPalette.ButtonFilled',
        color: 'white',
        border: 'none',

        '& [data-with-clos-button]': {
          color: 'white',
        },
      },
      light: {
        colorPalette,
        bg: 'colorPalette.ButtonLight',
        color: 'colorPalette.ButtonLightColor',
        border: 'none',

        '& [data-alert-message]': {
          color: 'Button.default.color',
        },
      },
      outline: {
        colorPalette,
        bg: 'transparent',
        color: 'colorPalette.ButtonOutline',
        borderColor: 'colorPalette.ButtonOutline',

        '& [data-alert-message]': {
          color: 'Button.default.color',
        },
      },
      transparent: {
        colorPalette,
        bg: 'transparent',
        color: 'colorPalette.ButtonLightColor',
        border: 'none',

        '& [data-alert-message]': {
          color: 'Button.default.color',
        },
      },
      white: {
        colorPalette,
        bg: 'white',
        color: 'colorPalette.ButtonFilled',
        border: 'none',

        '& [data-alert-message]': {
          color: 'black',
        },
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
  },
  defaultVariants: {
    variant: 'light',
  },
});

export type AlertRootVariants = RecipeVariantProps<typeof AlertRootStyles>;
export type AlertRootProps = HTMLStyledProps<'div'>;
export const AlertRoot = styled('div', AlertRootStyles);
AlertRoot.displayName = 'AlertRoot';
