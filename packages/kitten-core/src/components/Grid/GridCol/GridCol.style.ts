import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { cva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';

const GridColRootStyles = cva({});

export type GridColRootVariants = RecipeVariantProps<typeof GridColRootStyles>;
export type GridColRootProps = HTMLStyledProps<'div'>;
export const GridColRoot = styled('div', GridColRootStyles);
GridColRoot.displayName = 'GridColRoot';
