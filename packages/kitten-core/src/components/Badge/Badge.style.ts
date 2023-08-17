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
      bg: { base: 'colorPalette.600', _dark: 'colorPalette.800' },
    },
  },
  variants: {
    inline: {
      true: { root: { display: 'inline-block' } },
      false: { root: { display: 'block' } },
    },
    withBorder: {
      true: {
        label: {
          border: '0.125rem solid',
          borderColor: { base: 'white', _dark: 'dark.700' },
        },
      },
    },
    position: {
      'top-start': { label: {} },
      'top-center': { label: {} },
      'top-end': { label: {} },
      'middle-start': { label: {} },
      'middle-center': { label: {} },
      'middle-end': { label: {} },
      'bottom-start': { label: {} },
      'bottom-center': { label: {} },
      'bottom-end': { label: {} },
    },
  },
  defaultVariants: {
    inline: true,
  },
});

export type BadgeVariants = RecipeVariantProps<typeof badge>;
