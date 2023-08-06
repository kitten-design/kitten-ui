import { cpc } from '@kitten-ui/utils';
import React from 'react';

import type { BoxRootProps } from './Box.style';
import { BoxRoot } from './Box.style';

export interface BoxProps extends BoxRootProps {}

export const Box = cpc<'div', BoxProps>((props, ref) => {
  return <BoxRoot ref={ref} {...props} />;
});
Box.displayName = 'Box';
