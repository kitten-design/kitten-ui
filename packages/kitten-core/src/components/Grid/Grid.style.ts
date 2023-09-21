import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { cva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';

const GridRootStyles = cva({ base: { display: 'grid' } });

export type GridRootVariants = RecipeVariantProps<typeof GridRootStyles>;
export type GridRootProps = HTMLStyledProps<'div'>;
export const GridRoot = styled('div', GridRootStyles);
GridRoot.displayName = 'GridRoot';
