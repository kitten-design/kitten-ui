import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { cva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';

const KbdRootStyles = cva({
  base: {
    fontFamily: 'mono',
    lineHeight: 'normal',
    fontWeight: 'bold',
    borderRadius: '0.25rem',
    border: '0.0625rem solid',
    borderBottomWidth: '0.1875rem!',
    borderColor: { base: 'gray.300', _dark: 'dark.400' },
    color: { base: 'gray.700', _dark: 'dark.50' },
    bg: { base: 'gray.50', _dark: 'dark.500' },
  },
  variants: {
    size: {
      xs: { fontSize: '0.625rem', p: '0.125rem 0.25rem' },
      sm: { fontSize: '0.75rem', p: '0.1875rem 0.3125rem' },
      md: { fontSize: '0.875rem', p: '0.25rem 0.4375rem' },
      lg: { fontSize: '1rem', p: '0.3125rem 0.5625rem' },
      xl: { fontSize: '1.25rem', p: '0.5rem 0.875rem' },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

export type KbdRootVariants = RecipeVariantProps<typeof KbdRootStyles>;
export type KbdRootProps = HTMLStyledProps<'kbd'>;
export const KbdRoot = styled('kbd', KbdRootStyles);
KbdRoot.displayName = 'KbdRoot';
