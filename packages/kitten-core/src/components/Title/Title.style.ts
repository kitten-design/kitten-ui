import type { RecipeVariantProps } from '@kitten-ui/style/css';
import { cva } from '@kitten-ui/style/css';
import type { HTMLStyledProps } from '@kitten-ui/style/jsx';
import { styled } from '@kitten-ui/style/jsx';

const TitleRootStyles = cva({
  base: { fontWeight: 'bold', fontFamily: 'sans' },
  variants: {
    order: {
      1: { fontSize: '2.125rem', lineHeight: 1.3 },
      2: { fontSize: '1.625rem', lineHeight: 1.35 },
      3: { fontSize: '1.375rem', lineHeight: 1.4 },
      4: { fontSize: '1.125rem', lineHeight: 1.45 },
      5: { fontSize: '1rem', lineHeight: 1.5 },
      6: { fontSize: '0.875rem', lineHeight: 1.5 },
    },
  },
  defaultVariants: { order: 1 },
});

export type TitleRootVariants = RecipeVariantProps<typeof TitleRootStyles>;
export type TitleRootProps = HTMLStyledProps<'h1'>;
export const TitleRoot = styled('h1', TitleRootStyles);
TitleRoot.displayName = 'TitleRoot';
