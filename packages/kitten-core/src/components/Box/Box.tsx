import { cpc } from '@kitten-ui/utils';
import React from 'react';

import type { BoxRootProps, BoxRootVariants } from './Box.style';
import { BoxRoot } from './Box.style';

export interface BoxProps extends BoxRootProps {}

export const Box = cpc<'div', BoxProps & BoxRootVariants>((props, ref) => {
  return <BoxRoot ref={ref} {...props} />;
});
Box.displayName = 'Box';
