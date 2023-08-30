import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { cva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';

const ToasterRootStyles = cva({
  base: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    zIndex: 'toaster',
    '& [data-toaster-top-left]': {
      position: 'fixed',
      left: 'md',
      top: 'md',
      w: 'var(--toaster-container-width)',
      maxH: 'var(--toaster-max-height)',
      overflow: 'hidden',
    },
    '& [data-toaster-top]': {
      position: 'fixed',
      left: '50%',
      transform: 'translateX(-50%)',
      top: 'md',
      w: 'var(--toaster-container-width)',
      maxH: 'var(--toaster-max-height)',
      overflow: 'hidden',
    },
    '& [data-toaster-top-right]': {
      position: 'fixed',
      right: 'md',
      top: 'md',
      w: 'var(--toaster-container-width)',
      maxH: 'var(--toaster-max-height)',
      overflow: 'hidden',
    },
    '& [data-toaster-bottom-left]': {
      position: 'fixed',
      left: 'md',
      bottom: 'md',
      w: 'var(--toaster-container-width)',
      maxH: 'var(--toaster-max-height)',
      overflow: 'hidden',
    },
    '& [data-toaster-bottom]': {
      position: 'fixed',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: 'md',
      w: 'var(--toaster-container-width)',
      maxH: 'var(--toaster-max-height)',
      overflow: 'hidden',
    },
    '& [data-toaster-bottom-right]': {
      position: 'fixed',
      right: 'md',
      bottom: 'md',
      w: 'var(--toaster-container-width)',
      maxH: 'var(--toaster-max-height)',
      overflow: 'hidden',
    },
  },
  variants: {},
  defaultVariants: {},
});

export type ToasterRootVariants = RecipeVariantProps<typeof ToasterRootStyles>;
export type ToasterRootProps = HTMLStyledProps<'div'>;
export const ToasterRoot = styled('div', ToasterRootStyles);
ToasterRoot.displayName = 'ToasterRoot';
