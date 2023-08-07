import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { cva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';

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
