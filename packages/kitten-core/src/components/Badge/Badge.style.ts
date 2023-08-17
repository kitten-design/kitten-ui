import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { sva } from '@kitten-ui/styles/css';

const colorPalette = 'blue';

export const badge = sva({
  slots: ['root', 'label'],
  base: {
    root: { position: 'relative' },
    label: {
      colorPalette,
      '--badge-size': '10px',
      position: 'absolute',
      zIndex: 'badge',
      color: 'white',
      fontSize: 'xs',
      w: 'var(--badge-size)',
      h: 'var(--badge-size)',
      px: 0,
      '&[data-with-label=true]': {
        minW: 'var(--badge-size)',
        px: '0.3125rem',
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bg: 'colorPalette.600',
    },
  },
  variants: {
    inline: {
      true: { root: { display: 'inline-block' } },
      false: { root: { display: 'block' } },
    },
  },
  defaultVariants: {
    inline: true,
  },
});

export type BadgeVariants = RecipeVariantProps<typeof badge>;
