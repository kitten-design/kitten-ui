import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { cva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';

const FlexRootStyles = cva({
  base: { display: 'flex' },
});

export type FlexRootVariants = RecipeVariantProps<typeof FlexRootStyles>;
export type FlexRootProps = HTMLStyledProps<'div'>;
export const FlexRoot = styled('div', FlexRootStyles);
FlexRoot.displayName = 'FlexRoot';
