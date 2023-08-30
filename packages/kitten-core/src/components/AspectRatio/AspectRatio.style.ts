import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { cva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';

const AspectRatioRootStyles = cva({
  base: {
    '--ar-ratio': '1',
    position: 'relative',
    maxW: '100%',

    _before: {
      content: '""',
      h: 0,
      display: 'block',
      paddingBottom: 'calc((1 / var(--ar-ratio)) * 100%)',
    },

    _after: {
      content: '""',
      display: 'table',
      clear: 'both',
    },

    '& > *:not(style)': {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    '&>img,&>video': {
      objectFit: 'cover',
    },
  },
  variants: {},
  defaultVariants: {},
});

export type AspectRatioRootVariants = RecipeVariantProps<
  typeof AspectRatioRootStyles
>;
export type AspectRatioRootProps = HTMLStyledProps<'div'>;
export const AspectRatioRoot = styled('div', AspectRatioRootStyles);
AspectRatioRoot.displayName = 'AspectRatioRoot';
