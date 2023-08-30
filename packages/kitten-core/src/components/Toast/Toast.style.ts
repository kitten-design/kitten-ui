import type { RecipeVariantProps } from '@kitten-ui/style/css';
import { cva } from '@kitten-ui/style/css';
import type { HTMLStyledProps } from '@kitten-ui/style/jsx';
import { styled } from '@kitten-ui/style/jsx';

const colorPalette = 'blue';

const ToastRootStyles = cva({
  base: {
    colorPalette,
    overflow: 'hidden',
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    pl: '1.375rem',
    pr: 'xs',
    py: 'xs',
    boxShadow: 'sm',
    bg: { base: 'white', _dark: 'dark.600' },
    '&[data-with-icon]': {
      pl: 'xs',
    },
    '& > [data-toast-icon]': {
      boxSizing: 'border-box',
      mr: 'md',
      w: '1.75rem',
      h: '1.75rem',
      borderRadius: '1.75rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bg: 'colorPalette.ButtonFilled',
      color: 'white',
    },
    '& > [data-toast-loader]': { mr: 'md', w: '1.75rem', h: '1.75rem' },
    '& > [data-toast-body]': {
      flex: 1,
      overflow: 'hidden',
      mr: 'xs',
      '& [data-toast-title]': {
        lineHeight: 1.4,
        fontSize: '0.875rem',
        mb: '0.125rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: { base: 'gray.900', _dark: 'white' },
      },
    },
    '& [data-toast-description]': {
      lineHeight: 1.4,
      fontSize: '0.875rem',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: { base: 'black', _dark: 'dark.50' },
    },
    '&[data-with-title] [data-toast-description]': {
      color: { base: 'gray.600', _dark: 'dark.200' },
    },
  },
  variants: {
    withBorder: {
      true: {
        border: '1px solid',
        borderColor: { base: 'gray.300', _dark: 'dark.400' },
      },
    },
  },
  defaultVariants: {
    withBorder: true,
  },
});

export type ToastRootVariants = RecipeVariantProps<typeof ToastRootStyles>;
export type ToastRootProps = HTMLStyledProps<'div'>;
export const ToastRoot = styled('div', ToastRootStyles);
ToastRoot.displayName = 'ToastRoot';
