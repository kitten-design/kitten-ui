import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { cva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';

const BoxRootStyles = cva({
  base: {},
  variants: {
    styled: { true: { color: 'Box.color', bg: 'Box.bg' } },
  },
  defaultVariants: {
    styled: false,
  },
});

export type BoxRootVariants = RecipeVariantProps<typeof BoxRootStyles>;
export type BoxRootProps = HTMLStyledProps<'div'> & BoxRootVariants;
export const BoxRoot = styled('div', BoxRootStyles);
BoxRoot.displayName = 'BoxRoot';
