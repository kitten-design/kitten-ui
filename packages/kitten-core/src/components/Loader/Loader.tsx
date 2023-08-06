import type { FC } from 'react';
import React from 'react';

import { LoaderRoot, type LoaderRootProps } from './Loader.style';
import { Bars } from './loaders/Bars';
import { Dots } from './loaders/Dots';
import { Oval } from './loaders/Oval';

const LOADERS = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
};

export interface LoaderProps
  extends React.DOMAttributes<HTMLButtonElement>,
    LoaderRootProps {}

export const Loader: FC<LoaderProps> = (props) => {
  const { variant = 'oval', ...others } = props;

  return (
    <LoaderRoot
      {...others}
      role="presentation"
      as={LOADERS[variant]}
      variant={variant}
    />
  );
};

Loader.displayName = 'Loader';
