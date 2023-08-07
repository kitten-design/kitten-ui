import { cva } from '@kitten-ui/styles/css';
import { styled } from '@kitten-ui/styles/jsx';

import type { KittenProps } from '../../utils';

const BoxRootStyles = cva({
  base: {},
  variants: {
    styled: { true: { color: 'Box.color', bg: 'Box.bg' } },
  },
  defaultVariants: {
    styled: false,
  },
});
export const BoxRoot = styled('div', BoxRootStyles);

BoxRoot.displayName = 'BoxRoot';

export type BoxRootProps = KittenProps<'div', typeof BoxRootStyles>;
