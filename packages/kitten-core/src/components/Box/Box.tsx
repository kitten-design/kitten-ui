import { crc } from '@kitten-ui/utils';
import React from 'react';

import type { BoxRootProps } from './Box.style';
import { BoxRoot } from './Box.style';

export interface BoxProps
  extends React.DOMAttributes<HTMLDivElement>,
    BoxRootProps {}

export const Box = crc<HTMLDivElement, BoxProps>((props, ref) => {
  return <BoxRoot ref={ref} {...props} />;
});
