import { styled } from '@kitten-ui/styles/jsx';
import type { ComponentProps } from 'react';

export const LoaderRoot = styled('div', {
  base: {
    colorPalette: 'blue',
    '--loader-color': 'colors.colorPalette.500',
  },
  variants: {
    size: {
      xs: { w: '1.125rem', h: '1.125rem' },
      sm: { w: '1.375rem', h: '1.375rem' },
      md: { w: '2.25rem', h: '2.25rem' },
      lg: { w: '2.75rem', h: '2.75rem' },
      xl: { w: '3.625rem', h: '3.625rem' },
    },
    variant: {
      bars: { fill: 'var(--loader-color)' },
      oval: { stroke: 'var(--loader-color)' },
      dots: { fill: 'var(--loader-color)' },
    },
    as: {},
  },
  defaultVariants: {
    size: 'sm',
    variant: 'oval',
  },
});

LoaderRoot.displayName = 'LoaderRoot';

export type LoaderRootProps = ComponentProps<typeof LoaderRoot>;
