import type { RecipeVariantProps } from '@kitten-ui/style/css';
import { cva } from '@kitten-ui/style/css';
import type { HTMLStyledProps } from '@kitten-ui/style/jsx';
import { styled } from '@kitten-ui/style/jsx';

const ActionIconGroupRootStyles = cva({
  base: {
    display: 'inline-flex',
  },
  variants: {
    vertical: {
      true: {
        flexDirection: 'column',
        '& [data-action-icon]:first-of-type:not(:last-of-type)': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderBottomWidth: 'var(--border-width)',
        },
        '& [data-action-icon]:not(:last-of-type):not(:first-of-type)': {
          borderRadius: 0,
          borderTopWidth: 'var(--border-width)',
          borderBottomWidth: 'var(--border-width)',
        },
        '& [data-action-icon]:last-of-type:not(:first-of-type)': {
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
          borderTopWidth: 'var(--border-width)',
        },
      },
      false: {
        flexDirection: 'row',
        '& [data-action-icon]:first-of-type:not(:last-of-type)': {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderRightWidth: 'var(--border-width)',
        },
        '& [data-action-icon]:not(:last-of-type):not(:first-of-type)': {
          borderRadius: 0,
          borderLeftWidth: 'var(--border-width)',
          borderRightWidth: 'var(--border-width)',
        },
        '& [data-action-icon]:last-of-type:not(:first-of-type)': {
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

export type ActionIconGroupRootVariants = RecipeVariantProps<
  typeof ActionIconGroupRootStyles
>;
export type ActionIconGroupRootProps = HTMLStyledProps<'div'>;
export const ActionIconGroupRoot = styled('div', ActionIconGroupRootStyles);
ActionIconGroupRoot.displayName = 'ButtonActionIconGroupRoot';
