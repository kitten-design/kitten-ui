import { cpc } from '@kitten-ui/utils';
import React from 'react';

import type { GridRootProps, GridRootVariants } from './Grid.style';
import { GridRoot } from './Grid.style';
import { GridCol } from './GridCol/GridCol';

export interface Props extends GridRootProps {}

export type GridProps = Props & GridRootVariants;

export const Grid = cpc<'div', GridProps, { Col: typeof GridCol }>(
  (props, ref) => {
    return <GridRoot data-grid ref={ref} {...props} />;
  },
);
Grid.displayName = 'Grid';
Grid.Col = GridCol;
