import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { cva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';

const PopoverRootStyles = cva({
  base: {
    display: 'flex',
    position: 'absolute',
    zIndex: 'popover',
    px: 'xs',
    py: 'calc(token(spacing.xs) / 2)',
    fontSize: 'sm',
    boxShadow: 'md',
    rounded: 'sm',
    bg: { base: 'gray.50', _dark: 'gray.900' },
    border: '1px solid',
    borderColor: { base: 'gray.50', _dark: 'gray.900' },
    maxW: '20rem',

    '& [data-popover-label]': {
      display: 'inline-block',
      maxW: 'calc(100vw - token(spacing.xs) * 2 - 1rem)',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },

    '& [data-popover-arrow]': {
      fill: { base: 'white', _dark: 'gray.800' },
      border: 0,
      zIndex: 1,
    },
  },
  variants: {
    multiline: {
      true: {
        '& [data-popover-label]': {
          whiteSpace: 'normal',
        },
      },
      false: {
        '& [data-popover-label]': {
          whiteSpace: 'nowrap',
        },
      },
    },
  },
  defaultVariants: {
    multiline: true,
  },
});

export type PopoverRootVariants = RecipeVariantProps<typeof PopoverRootStyles>;
export type PopoverRootProps = HTMLStyledProps<'div'>;
export const PopoverRoot = styled('div', PopoverRootStyles);
PopoverRoot.displayName = 'PopoverRoot';
