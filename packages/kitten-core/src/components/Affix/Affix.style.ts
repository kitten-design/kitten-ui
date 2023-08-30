import type { RecipeVariantProps } from '@kitten-ui/style/css';
import { cva } from '@kitten-ui/style/css';
import type { HTMLStyledProps } from '@kitten-ui/style/jsx';
import { styled } from '@kitten-ui/style/jsx';

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
