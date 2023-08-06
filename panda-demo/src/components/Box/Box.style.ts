import { styled } from '@kitten-ui/styles/jsx';
import type { ComponentProps } from 'react';

export const BoxRoot = styled('div', {
  base: {},
  variants: {
    styled: { true: { color: 'Box.color', bg: 'Box.bg' } },
  },
  defaultVariants: {
    styled: false,
  },
});

BoxRoot.displayName = 'BoxRoot';

export type BoxRootProps = ComponentProps<typeof BoxRoot>;
