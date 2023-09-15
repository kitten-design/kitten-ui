import { cpc } from '@kitten-ui/utils';
import React from 'react';

import type { GridColRootProps, GridColRootVariants } from './GridCol.style';
import { GridColRoot } from './GridCol.style';

export interface Props extends GridColRootProps {}

export type GridColProps = Props & GridColRootVariants;

export const GridCol = cpc<'div', GridColProps>((props, ref) => {
  return <GridColRoot data-grid-col ref={ref} {...props} />;
});
GridCol.displayName = 'GridCol';
