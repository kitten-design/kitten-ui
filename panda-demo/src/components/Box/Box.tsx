import { HTMLStyledProps, styled } from '@kitten-ui/styles/jsx';

export const Box = styled('div', {
  base: { color: 'Box.color', bg: 'Box.bg' },
});

Box.displayName = 'Box';

export type BoxProps = HTMLStyledProps<typeof Box>;
