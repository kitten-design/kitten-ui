import type { Properties } from '@kitten-ui/styles/types/csstype';
import { cpc } from '@kitten-ui/utils';
import React from 'react';

import type { GridRootProps, GridRootVariants } from './Grid.style';
import { GridRoot } from './Grid.style';
import { GridCol } from './GridCol/GridCol';

export interface Props extends GridRootProps {
  columns?: number;
  minChildWidth?: Properties['minWidth'];
}

export type GridProps = Props & GridRootVariants;

export const Grid = cpc<'div', GridProps, { Col: typeof GridCol }>(
  (props, ref) => {
    const { css, minChildWidth, columns, gap, rowGap, columnGap, ...others } =
      props;
    return (
      <GridRoot
        data-grid
        ref={ref}
        css={{
          gridTemplateColumns:
            columns != null
              ? `repeat(${columns}, minmax(0, 1fr))`
              : minChildWidth != null
              ? `repeat(auto-fit, minmax(${minChildWidth}, 1fr))`
              : undefined,
          ...css,
        }}
        rowGap={rowGap || gap}
        columnGap={columnGap || gap}
        {...others}
      />
    );
  },
);
Grid.displayName = 'Grid';
Grid.Col = GridCol;
Grid.defaultProps = {
  columns: 12,
  gap: '10px',
};
