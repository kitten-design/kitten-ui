import React from 'react';

import { cpc } from '../../utils';
import type { LoaderRootProps, LoaderRootVariants } from './Loader.style';
import { LoaderRoot } from './Loader.style';
import { Bars } from './loaders/Bars';
import { Dots } from './loaders/Dots';
import { Oval } from './loaders/Oval';

const LOADERS = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
};

export interface LoaderProps extends LoaderRootProps {}

export const Loader = cpc<'div', LoaderProps & LoaderRootVariants>(
  (props, ref) => {
    const { variant = 'oval', ...others } = props;

    return (
      <LoaderRoot
        ref={ref}
        {...others}
        role="presentation"
        variant={variant}
        {...{ as: LOADERS[variant] }}
      />
    );
  },
);

Loader.displayName = 'Loader';
