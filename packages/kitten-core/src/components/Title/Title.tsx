import { cpc } from '@kitten-ui/utils';
import React from 'react';

import type { TitleRootProps, TitleRootVariants } from './Title.style';
import { TitleRoot } from './Title.style';

export interface Props extends TitleRootProps {}

export type TitleProps = Props & TitleRootVariants;

export const Title = cpc<'h1', TitleProps>((props, ref) => {
  const { order, ...others } = props;

  if (![1, 2, 3, 4, 5, 6].includes(order!)) {
    return null;
  }

  return (
    <TitleRoot
      data-title
      ref={ref}
      order={order}
      {...{ as: `h${order}` }}
      {...others}
    />
  );
});
Title.displayName = 'Title';
