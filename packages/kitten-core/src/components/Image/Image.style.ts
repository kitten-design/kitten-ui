import type { RecipeVariantProps } from '@kitten-ui/style/css';
import { cva } from '@kitten-ui/style/css';
import type { HTMLStyledProps } from '@kitten-ui/style/jsx';
import { styled } from '@kitten-ui/style/jsx';

const ImageRootStyles = cva({
  base: {
    display: 'block',
    objectFit: 'cover',
    width: '100%',
    '&[data-image-placeholder]': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minH: '100px',
      color: 'Body.color',
      bg: 'Body.bg',
    },
  },
  variants: {},
  defaultVariants: {},
});

export type ImageRootVariants = RecipeVariantProps<typeof ImageRootStyles>;
export type ImageRootProps = HTMLStyledProps<'img'>;
export const ImageRoot = styled('img', ImageRootStyles);
ImageRoot.displayName = 'ImageRoot';
