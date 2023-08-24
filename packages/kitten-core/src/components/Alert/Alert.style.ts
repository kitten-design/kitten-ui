import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { sva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';

const colorPalette = 'blue';

export const alert = sva({
  slots: ['root', 'wrapper', 'body', 'title', 'message', 'icon', 'closeButton'],
  base: {
    root: {
      border: '0.0625rem solid',
      px: 'xl',
      py: 'md',
      overflow: 'hidden',
      position: 'relative',
    },
    wrapper: {
      display: 'flex',
    },
    icon: {
      lineHeight: 1,
      w: '1.25rem',
      h: '1.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      mr: 'md',
      mt: '0.0625rem',
    },
    body: { flex: 1 },
    title: {
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
    message: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      fontSize: 'sm',
    },
    closeButton: {
      w: '1.25rem',
      h: '1.25rem',
      mr: '-md',
      mt: '-xs',
    },
  },
  variants: {
    variant: {
      default: {
        root: {
          bg: 'Button.default.bg',
          color: 'Button.default.color',
          borderColor: 'Button.default.borderColor',
        },
        closeButton: {
          color: 'Button.default.color',
        },
        message: {
          color: 'Button.default.color',
        },
      },
      filled: {
        root: {
          colorPalette,
          bg: 'colorPalette.ButtonFilled',
          color: 'white',
          border: 'none',
        },
        closeButton: {
          color: 'white',
        },
      },
      light: {
        root: {
          colorPalette,
          bg: 'colorPalette.ButtonLight',
          color: 'colorPalette.ButtonLightColor',
          border: 'none',
        },
        message: {
          color: 'Button.default.color',
        },
      },
      outline: {
        root: {
          colorPalette,
          bg: 'transparent',
          color: 'colorPalette.ButtonOutline',
          borderColor: 'colorPalette.ButtonOutline',
        },
        message: {
          color: 'Button.default.color',
        },
      },
      transparent: {
        root: {
          colorPalette,
          bg: 'transparent',
          color: 'colorPalette.ButtonLightColor',
          border: 'none',
        },
        message: {
          color: 'Button.default.color',
        },
      },
      white: {
        root: {
          colorPalette,
          bg: 'white',
          color: 'colorPalette.ButtonFilled',
          border: 'none',
        },
        message: {
          color: 'black',
        },
      },
      gradient: {
        root: {
          colorPalette,
          gradientFrom: 'colorPalette.400',
          gradientTo: 'colorPalette.800',
          bgGradient: 'to-br',
          color: 'white',
          border: 'none',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'light',
  },
});

export type AlertVariants = RecipeVariantProps<typeof alert>;
export type AlertVariantsProps = AlertVariants & HTMLStyledProps<'div'>;
