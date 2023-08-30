import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { cva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';

const AffixRootStyles = cva({
  base: {
    position: 'fixed',
    bottom: 'md',
    right: 'md',
    zIndex: 'affix',
  },
});

export type AffixRootVariants = RecipeVariantProps<typeof AffixRootStyles>;
export type AffixRootProps = HTMLStyledProps<'div'>;
export const AffixRoot = styled('div', AffixRootStyles);
AffixRoot.displayName = 'AffixRoot';
