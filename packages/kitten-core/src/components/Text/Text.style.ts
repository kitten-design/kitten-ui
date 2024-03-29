import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { cva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';

const TextRootStyles = cva({
  base: {
    WebkitTapHighlightColor: 'transparent',
    textDecoration: 'none',
    fontWeight: 'normal',
    m: 0,
    p: 0,
  },
  variants: {
    truncate: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
    inherit: {
      true: {
        lineHeight: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
      },
    },
  },
  defaultVariants: {
    truncate: false,
    inherit: false,
  },
});

export type TextRootVariants = RecipeVariantProps<typeof TextRootStyles>;
export type TextRootProps = HTMLStyledProps<'p'>;
export const TextRoot = styled('p', TextRootStyles);
TextRoot.displayName = 'TextRoot';
