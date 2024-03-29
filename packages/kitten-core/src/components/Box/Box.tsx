import { cpc } from '@kitten-ui/utils';
import React from 'react';

import type { BoxRootProps, BoxRootVariants } from './Box.style';
import { BoxRoot } from './Box.style';

export interface Props extends BoxRootProps {}

export type BoxProps = Props & BoxRootVariants;

export const Box = cpc<'div', BoxProps>((props, ref) => {
  return <BoxRoot data-box ref={ref} {...props} />;
});
Box.displayName = 'Box';
