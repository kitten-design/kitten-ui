import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { cva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';

const PopoverRootStyles = cva({
  base: {
    display: 'flex',
    position: 'absolute',
    zIndex: 'popover',
    px: 'md',
    py: 'sm',
    fontSize: 'sm',
    boxShadow: 'lg',
    rounded: 'sm',
    bg: { base: 'gray.50', _dark: 'gray.900' },
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: { base: 'gray.300', _dark: 'dark.400' },
    maxW: '20rem',

    '& [data-popover-dropdown]': {
      display: 'inline-block',
      maxW: 'calc(100vw - token(spacing.xs) * 2 - 1rem)',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },

    '& > [data-popover-arrow]': {
      fill: { base: 'gray.50', _dark: 'gray.900' },
      stroke: { base: 'gray.300', _dark: 'dark.400' },
      zIndex: 1,
      position: 'relative',
      _before: {
        position: 'absolute',
        content: '"123"',
        bg: 'red',
        width: '10px',
        height: '1px',
        zIndex: 1,
        top: 0,
      },
    },
  },
  variants: {
    multiline: {
      true: {
        '& [data-popover-dropdown]': {
          whiteSpace: 'normal',
        },
      },
      false: {
        '& [data-popover-dropdown]': {
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
