import React from 'react';

import { cpc } from '../../utils';
import type { BoxRootProps, BoxRootVariants } from './Box.style';
import { BoxRoot } from './Box.style';

export interface Props extends BoxRootProps {}

export type BoxProps = Props & BoxRootVariants;

export const Box = cpc<'div', BoxProps>((props, ref) => {
  return <BoxRoot ref={ref} {...props} />;
});
Box.displayName = 'Box';
