import type { FC } from 'react';
import React, { Fragment } from 'react';

import type { PortalProps } from './Portal';
import { Portal } from './Portal';

export interface OptionalPortalProps extends PortalProps {
  withinPortal?: boolean;
}

export const OptionalPortal: FC<OptionalPortalProps> = ({
  withinPortal = true,
  children,
  ...others
}) => {
  if (withinPortal) {
    return <Portal {...others}>{children}</Portal>;
  }

  return <Fragment>{children}</Fragment>;
};

OptionalPortal.displayName = 'OptionalPortal';
