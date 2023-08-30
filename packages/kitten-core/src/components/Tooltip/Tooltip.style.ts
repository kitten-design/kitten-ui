import type { RecipeVariantProps } from '@kitten-ui/style/css';
import { cva } from '@kitten-ui/style/css';
import type { HTMLStyledProps } from '@kitten-ui/style/jsx';
import { styled } from '@kitten-ui/style/jsx';

const TooltipRootStyles = cva({
  base: {
    display: 'flex',
    position: 'absolute',
    zIndex: 'tooltip',
    px: 'xs',
    py: 'calc(token(spacing.xs) / 2)',
    fontSize: 'sm',
    boxShadow: 'md',
    rounded: 'sm',
    bg: { base: 'gray.900', _dark: 'gray.200' },
    color: { base: 'white', _dark: 'black' },

    '& [data-tooltip-label]': {
      display: 'inline-block',
      maxW: 'calc(100vw - token(spacing.xs) * 2 - 1rem)',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },

    '& [data-tooltip-arrow]': {
      fill: { base: 'gray.900', _dark: 'gray.200' },
      border: 0,
      zIndex: 1,
    },
  },
  variants: {
    multiline: {
      true: {
        '& [data-tooltip-label]': {
          whiteSpace: 'normal',
        },
      },
      false: {
        '& [data-tooltip-label]': {
          whiteSpace: 'nowrap',
        },
      },
    },
  },
  defaultVariants: {
    multiline: false,
  },
});

export type TooltipRootVariants = RecipeVariantProps<typeof TooltipRootStyles>;
export type TooltipRootProps = HTMLStyledProps<'div'>;
export const TooltipRoot = styled('div', TooltipRootStyles);
TooltipRoot.displayName = 'TooltipRoot';
