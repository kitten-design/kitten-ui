import type { RecipeVariantProps } from '@kitten-ui/style/css';
import { cva } from '@kitten-ui/style/css';
import type { HTMLStyledProps } from '@kitten-ui/style/jsx';
import { styled } from '@kitten-ui/style/jsx';

const DividerRootStyles = cva({
  base: {
    borderStyle: 'solid',
    borderColor: 'Common.borderColor',
    '& > [data-divider-label]': {
      display: 'flex',
      alignItems: 'center',
      fontSize: 'xs',
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
    },
  },
  variants: {
    size: { xs: {}, sm: {}, md: {}, lg: {}, xl: {} },
    labelPosition: {
      left: {
        '& > [data-divider-label]': {
          _before: {
            display: 'none',
          },
        },
      },
      right: {
        '& > [data-divider-label]': {
          _after: {
            display: 'none',
          },
        },
      },
    },
    vertical: {
      true: {
        display: 'inline-flex',
        mx: 'xs',
        alignSelf: 'stretch',
        h: 'auto',
      },
      false: { my: 'xs' },
    },
    withLabel: {
      true: { borderWidth: '0!' },
    },
  },
  compoundVariants: [
    { size: 'xs', vertical: true, css: { borderLeftWidth: '0.0625rem' } },
    { size: 'sm', vertical: true, css: { borderLeftWidth: '0.125rem' } },
    { size: 'md', vertical: true, css: { borderLeftWidth: '0.1875rem' } },
    { size: 'lg', vertical: true, css: { borderLeftWidth: '0.25rem' } },
    { size: 'xl', vertical: true, css: { borderLeftWidth: '0.3125rem' } },

    {
      size: 'xs',
      vertical: false,
      css: {
        borderTopWidth: '0.0625rem',
        '& [data-divider-label]': {
          _before: { borderTopWidth: '0.0625rem' },
          _after: { borderTopWidth: '0.0625rem' },
        },
      },
    },
    {
      size: 'sm',
      vertical: false,
      css: {
        borderTopWidth: '0.125rem',
        '& [data-divider-label]': {
          _before: { borderTopWidth: '0.125rem' },
          _after: { borderTopWidth: '0.125rem' },
        },
      },
    },
    {
      size: 'md',
      vertical: false,
      css: {
        borderTopWidth: '0.1875rem',
        '& [data-divider-label]': {
          _before: { borderTopWidth: '0.1875rem' },
          _after: { borderTopWidth: '0.1875rem' },
        },
      },
    },
    {
      size: 'lg',
      vertical: false,
      css: {
        borderTopWidth: '0.25rem',
        '& [data-divider-label]': {
          _before: { borderTopWidth: '0.25rem' },
          _after: { borderTopWidth: '0.25rem' },
        },
      },
    },
    {
      size: 'xl',
      vertical: false,
      css: {
        borderTopWidth: '0.3125rem',
        '& [data-divider-label]': {
          _before: { borderTopWidth: '0.3125rem' },
          _after: { borderTopWidth: '0.3125rem' },
        },
      },
    },
  ],
  defaultVariants: {
    size: 'xs',
    vertical: false,
  },
});

export type DividerRootVariants = RecipeVariantProps<typeof DividerRootStyles>;
export type DividerRootProps = HTMLStyledProps<'p'>;
export const DividerRoot = styled('p', DividerRootStyles);
DividerRoot.displayName = 'DividerRoot';
