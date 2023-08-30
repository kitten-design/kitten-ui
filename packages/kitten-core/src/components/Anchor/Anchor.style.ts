import type { RecipeVariantProps } from '@kitten-ui/style/css';
import { cva } from '@kitten-ui/style/css';
import type { HTMLStyledProps } from '@kitten-ui/style/jsx';
import { styled } from '@kitten-ui/style/jsx';

const AnchorRootStyles = cva({
  base: {
    color: 'blue.500',
    textDecoration: 'none',
    appearance: 'none',
    border: 'none',
    display: 'inline',
    p: 0,
    m: 0,
    bgColor: 'transparent',
    cursor: 'pointer',
  },
  variants: {
    underline: {
      always: { textDecoration: 'underline' },
      hover: { _hover: { textDecoration: 'underline' } },
      never: { textDecoration: 'none' },
    },
  },
  defaultVariants: {
    underline: 'hover',
  },
});

export type AnchorRootVariants = RecipeVariantProps<typeof AnchorRootStyles>;
export type AnchorRootProps = HTMLStyledProps<'a'>;
export const AnchorRoot = styled('a', AnchorRootStyles);
AnchorRoot.displayName = 'AnchorRoot';
