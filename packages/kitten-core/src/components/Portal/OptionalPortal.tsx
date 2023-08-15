import React from 'react';

import type { PortalProps } from './Portal';
import { Portal } from './Portal';

export interface OptionalPortalProps extends PortalProps {
  withinPortal?: boolean;
}

export const OptionalPortal: React.FC<OptionalPortalProps> = ({
  withinPortal = true,
  children,
  ...others
}) => {
  if (withinPortal) {
    return <Portal {...others}>{children}</Portal>;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

OptionalPortal.displayName = 'OptionalPortal';
