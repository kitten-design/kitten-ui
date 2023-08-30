import type { RecipeVariantProps } from '@kitten-ui/style/css';
import { cva } from '@kitten-ui/style/css';
import type { HTMLStyledProps } from '@kitten-ui/style/jsx';
import { styled } from '@kitten-ui/style/jsx';

const CenterRootStyles = cva({
  base: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  variants: {
    inline: { true: { display: 'inline-flex' } },
  },
  defaultVariants: {},
});

export type CenterRootVariants = RecipeVariantProps<typeof CenterRootStyles>;
export type CenterRootProps = HTMLStyledProps<'div'>;
export const CenterRoot = styled('div', CenterRootStyles);
CenterRoot.displayName = 'CenterRoot';
