import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { cva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';

const CloseButtonRootStyles = cva({
  base: {},
  variants: {
    styled: { true: { color: 'CloseButton.color', bg: 'CloseButton.bg' } },
  },
  defaultVariants: {
    styled: false,
  },
});

export type CloseButtonRootVariants = RecipeVariantProps<
  typeof CloseButtonRootStyles
>;
export type CloseButtonRootProps = HTMLStyledProps<'div'>;
export const CloseButtonRoot = styled('div', CloseButtonRootStyles);
CloseButtonRoot.displayName = 'CloseButtonRoot';
