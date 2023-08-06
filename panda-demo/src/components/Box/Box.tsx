import { styled } from '@kitten-ui/styles/jsx';
import type { ComponentProps } from 'react';

export const Box = styled('div', {
  base: {},
  variants: {
    styled: { true: { color: 'Box.color', bg: 'Box.bg' } },
  },
  defaultVariants: {
    styled: false,
  },
});

Box.displayName = 'Box';

export type BoxProps = ComponentProps<typeof Box>;
