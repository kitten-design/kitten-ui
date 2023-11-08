import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { cva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';

const ButtonGroupRootStyles = cva({
  base: {
    display: 'inline-flex',
  },
  variants: {
    vertical: {
      true: {
        flexDirection: 'column',
        '& [data-button]:first-of-type:not(:last-of-type)': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderBottomWidth: 'var(--border-width)',
        },
        '& [data-button]:not(:last-of-type):not(:first-of-type)': {
          borderRadius: 0,
          borderTopWidth: 'var(--border-width)',
          borderBottomWidth: 'var(--border-width)',
        },
        '& [data-button]:last-of-type:not(:first-of-type)': {
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
          borderTopWidth: 'var(--border-width)',
        },
      },
      false: {
        flexDirection: 'row',
        '& [data-button]:first-of-type:not(:last-of-type)': {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderRightWidth: 'var(--border-width)',
        },
        '& [data-button]:not(:last-of-type):not(:first-of-type)': {
          borderRadius: 0,
          borderLeftWidth: 'var(--border-width)',
          borderRightWidth: 'var(--border-width)',
        },
        '& [data-button]:last-of-type:not(:first-of-type)': {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderLeftWidth: 'var(--border-width)',
        },
      },
    },
  },
  defaultVariants: {
    vertical: false,
  },
});

export type ButtonGroupRootVariants = RecipeVariantProps<typeof ButtonGroupRootStyles>;
export type ButtonGroupRootProps = HTMLStyledProps<'div'>;
export const ButtonGroupRoot = styled('div', ButtonGroupRootStyles);
ButtonGroupRoot.displayName = 'ButtonButtonGroupRoot';
