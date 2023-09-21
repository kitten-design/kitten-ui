import { cpc } from '@kitten-ui/utils';
import React from 'react';

import type { GridColRootProps, GridColRootVariants } from './GridCol.style';
import { GridColRoot } from './GridCol.style';

export interface Props extends GridColRootProps {
  span?: number;
  rowSpan?: number;
}

export type GridColProps = Props & GridColRootVariants;

export const GridCol = cpc<'div', GridColProps>((props, ref) => {
  const {
    css,
    span,
    rowSpan,
    gridRowStart,
    gridRowEnd,
    gridColumnStart,
    gridColumnEnd,
    ...others
  } = props;

  return (
    <GridColRoot
      data-grid-col
      ref={ref}
      css={{
        gridColumn: span
          ? `span ${span}`
          : gridColumnStart || gridColumnEnd
          ? undefined
          : 'auto',
        gridRow: rowSpan
          ? `span ${rowSpan}`
          : gridRowStart || gridRowEnd
          ? undefined
          : 'auto',
        ...css,
      }}
      {...{ gridRowStart, gridRowEnd, gridColumnStart, gridColumnEnd }}
      {...others}
    />
  );
});
GridCol.displayName = 'GridCol';
