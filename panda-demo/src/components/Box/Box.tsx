import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';
import { ComponentProps } from 'react';

export const Box = styled('div', {
  base: { color: 'Box.color', bg: 'Box.bg' },
});

Box.displayName = 'Box';

export type BoxProps = ComponentProps<typeof Box>;
