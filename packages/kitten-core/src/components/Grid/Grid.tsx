import { cpc, getChildrenByType } from '@kitten-ui/utils';
import React from 'react';

import type { GridRootProps, GridRootVariants } from './Grid.style';
import { GridRoot } from './Grid.style';
import { GridCol } from './GridCol/GridCol';

export interface Props extends GridRootProps {
  columns?: number;
}

export type GridProps = Props & GridRootVariants;

export const Grid = cpc<'div', GridProps, { Col: typeof GridCol }>((props, ref) => {
  const { style, columns, gap, rowGap, columnGap, children, ...others } = props;

  const GridCols = getChildrenByType(children, GridCol);

  return (
    <GridRoot
      data-grid
      ref={ref}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        ...style,
      }}
      rowGap={rowGap || gap}
      columnGap={columnGap || gap}
      {...others}>
      {GridCols}
    </GridRoot>
  );
});
Grid.displayName = 'Grid';
Grid.Col = GridCol;
Grid.defaultProps = {
  columns: 12,
  gap: '10px',
};
