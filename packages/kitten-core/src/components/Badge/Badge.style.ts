import type { RecipeVariantProps } from '@kitten-ui/style/css';
import { cva } from '@kitten-ui/style/css';
import type { HTMLStyledProps } from '@kitten-ui/style/jsx';
import { styled } from '@kitten-ui/style/jsx';

const BadgeRootStyles = cva({
  base: {
    position: 'relative',
    rounded: 'full',
    colorPalette: 'red',
    fontSize: 'xs',

    '&>[data-badge-label]': {
      '--badge-offset': '0rem',
      '--badge-size': '0.625rem',
      position: 'absolute',
      zIndex: 'badge',
      w: 'var(--badge-size)',
      h: 'var(--badge-size)',
      px: 0,
      '&[data-with-label]': {
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
      color: 'white',
      bg: { base: 'colorPalette.600', _dark: 'colorPalette.800' },
    },
  },
  variants: {
    inline: {
      true: { display: 'inline-block' },
      false: { display: 'block' },
    },
    withBorder: {
      true: {
        '&>[data-badge-label]': {
          border: '0.125rem solid',
          borderColor: { base: 'white', _dark: 'dark.700' },
        },
      },
    },
    processing: {
      true: {
        '&>[data-badge-label]': {
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
        '&>[data-badge-label]': {
          top: 'var(--badge-offset)',
          left: 'var(--badge-offset)',
          transform: 'translate(-50%,-50%)',
        },
      },
      'top-center': {
        '&>[data-badge-label]': {
          top: 'var(--badge-offset)',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        },
      },
      'top-end': {
        '&>[data-badge-label]': {
          top: 'var(--badge-offset)',
          right: 'var(--badge-offset)',
          transform: 'translate(50%,-50%)',
        },
      },
      'middle-start': {
        '&>[data-badge-label]': {
          top: '50%',
          left: 'var(--badge-offset)',
          transform: 'translate(50%,-50%)',
        },
      },
      'middle-center': {
        '&>[data-badge-label]': {
          top: '50%',
          left: '50%',
          transform: 'translate(50%,-50%)',
        },
      },
      'middle-end': {
        '&>[data-badge-label]': {
          top: '50%',
          right: 'var(--badge-offset)',
          transform: 'translate(50%,-50%)',
        },
      },
      'bottom-start': {
        '&>[data-badge-label]': {
          bottom: 'var(--badge-offset)',
          left: 'var(--badge-offset)',
          transform: 'translate(-50%,50%)',
        },
      },
      'bottom-center': {
        '&>[data-badge-label]': {
          bottom: 'var(--badge-offset)',
          left: '50%',
          transform: 'translate(-50%,50%)',
        },
      },
      'bottom-end': {
        '&>[data-badge-label]': {
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
    processing: false,
    position: 'top-end',
  },
});

export type BadgeRootVariants = RecipeVariantProps<typeof BadgeRootStyles>;
export type BadgeRootProps = HTMLStyledProps<'div'>;
export const BadgeRoot = styled('div', BadgeRootStyles);
BadgeRoot.displayName = 'BadgeRoot';
