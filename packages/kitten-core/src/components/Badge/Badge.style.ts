import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { sva } from '@kitten-ui/styles/css';

export const badge = sva({
  slots: ['root', 'label'],
  base: {
    root: { position: 'relative' },
    label: {
      '--badge-offset': '0rem',
      '--badge-size': '0.625rem',
      position: 'absolute',
      zIndex: 'badge',
      w: 'var(--badge-size)',
      h: 'var(--badge-size)',
      px: 0,
      '&[data-with-label=true]': {
        '--badge-size': '1rem',
        w: 'unset',
        minW: 'var(--badge-size)',
        px: '0.3125rem',
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      rounded: 'inherit',
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
    processing: {
      true: {
        label: {
          _before: {
            content: '""',
            position: 'absolute',
            inset: 0,
            bg: { base: 'colorPalette.600', _dark: 'colorPalette.800' },
            rounded: 'inherit',
            zIndex: -1,
            animation: 'ping',
          },
        },
      },
    },
    position: {
      'top-start': {
        label: {
          top: 'var(--badge-offset)',
          left: 'var(--badge-offset)',
          transform: 'translate(-50%,-50%)',
        },
      },
      'top-center': {
        label: {
          top: 'var(--badge-offset)',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        },
      },
      'top-end': {
        label: {
          top: 'var(--badge-offset)',
          right: 'var(--badge-offset)',
          transform: 'translate(50%,-50%)',
        },
      },
      'middle-start': {
        label: {
          top: '50%',
          left: 'var(--badge-offset)',
          transform: 'translate(50%,-50%)',
        },
      },
      'middle-center': {
        label: { top: '50%', left: '50%', transform: 'translate(50%,-50%)' },
      },
      'middle-end': {
        label: {
          top: '50%',
          right: 'var(--badge-offset)',
          transform: 'translate(50%,-50%)',
        },
      },
      'bottom-start': {
        label: {
          bottom: 'var(--badge-offset)',
          left: 'var(--badge-offset)',
          transform: 'translate(-50%,50%)',
        },
      },
      'bottom-center': {
        label: {
          bottom: 'var(--badge-offset)',
          left: '50%',
          transform: 'translate(-50%,50%)',
        },
      },
      'bottom-end': {
        label: {
          bottom: 'var(--badge-offset)',
          right: 'var(--badge-offset)',
          transform: 'translate(50%,50%)',
        },
      },
    },
  },
  defaultVariants: {
    inline: true,
    withBorder: false,
    position: 'top-end',
  },
});

export type BadgeVariants = RecipeVariantProps<typeof badge>;
