import type { RecipeVariantProps } from '@kitten-ui/style/css';
import { cva } from '@kitten-ui/style/css';
import type { HTMLStyledProps } from '@kitten-ui/style/jsx';
import { styled } from '@kitten-ui/style/jsx';

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
export type BoxRootProps = HTMLStyledProps<'div'>;
export const BoxRoot = styled('div', BoxRootStyles);
BoxRoot.displayName = 'BoxRoot';
