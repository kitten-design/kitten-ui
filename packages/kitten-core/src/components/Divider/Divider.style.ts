import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { sva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';

export const divider = sva({
  slots: ['root', 'label'],
  base: {
    root: {},
    label: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 'xs',
      color: 'Common.dimmedColor',
      whiteSpace: 'nowrap',
      borderColor: 'inherit',
      borderStyle: 'inherit',
      _before: {
        content: '""',
        flex: 1,
        h: '0.0625rem',
        mr: 'xs',
        borderColor: 'inherit',
        borderStyle: 'inherit',
      },
      _after: {
        content: '""',
        flex: 1,
        h: '0.0625rem',
        ml: 'xs',
        borderColor: 'inherit',
        borderStyle: 'inherit',
      },
      '&[data-label-position="left"]': {
        _before: {
          display: 'none',
        },
      },
      '&[data-label-position="right"]': {
        _after: {
          display: 'none',
        },
      },
    },
  },
  variants: {
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {},
      xl: {},
    },
    vertical: {
      true: { root: { display: 'inline', mx: 'xs' } },
      false: { root: { my: 'xs' } },
    },
    withLabel: {
      true: { root: { borderWidth: '0!' } },
      false: { label: { display: 'none' } },
    },
  },
  compoundVariants: [
    {
      size: 'xs',
      vertical: true,
      css: {
        root: { alignSelf: 'stretch', h: 'auto', borderLeftWidth: '0.0625rem' },
      },
    },
    {
      size: 'sm',
      vertical: true,
      css: {
        root: { alignSelf: 'stretch', h: 'auto', borderLeftWidth: '0.125rem' },
      },
    },
    {
      size: 'md',
      vertical: true,
      css: {
        root: { alignSelf: 'stretch', h: 'auto', borderLeftWidth: '0.1875rem' },
      },
    },
    {
      size: 'lg',
      vertical: true,
      css: {
        root: { alignSelf: 'stretch', h: 'auto', borderLeftWidth: '0.25rem' },
      },
    },
    {
      size: 'xl',
      vertical: true,
      css: {
        root: { alignSelf: 'stretch', h: 'auto', borderLeftWidth: '0.3125rem' },
      },
    },

    {
      size: 'xs',
      vertical: false,
      css: {
        root: { borderTopWidth: '0.0625rem' },
        label: {
          _before: { borderTopWidth: '0.0625rem' },
          _after: { borderTopWidth: '0.0625rem' },
        },
      },
    },
    {
      size: 'sm',
      vertical: false,
      css: {
        root: { borderTopWidth: '0.125rem' },
        label: {
          _before: { borderTopWidth: '0.125rem' },
          _after: { borderTopWidth: '0.125rem' },
        },
      },
    },
    {
      size: 'md',
      vertical: false,
      css: {
        root: { borderTopWidth: '0.1875rem' },
        label: {
          _before: { borderTopWidth: '0.1875rem' },
          _after: { borderTopWidth: '0.1875rem' },
        },
      },
    },
    {
      size: 'lg',
      vertical: false,
      css: {
        root: { borderTopWidth: '0.25rem' },
        label: {
          _before: { borderTopWidth: '0.25rem' },
          _after: { borderTopWidth: '0.25rem' },
        },
      },
    },
    {
      size: 'xl',
      vertical: false,
      css: {
        root: { borderTopWidth: '0.3125rem' },
        label: {
          _before: { borderTopWidth: '0.3125rem' },
          _after: { borderTopWidth: '0.3125rem' },
        },
      },
    },
  ],
  defaultVariants: {
    size: 'xs',
  },
});

export type DividerVariants = RecipeVariantProps<typeof divider>;
export type DividerVariantsProps = DividerVariants & HTMLStyledProps<'div'>;
