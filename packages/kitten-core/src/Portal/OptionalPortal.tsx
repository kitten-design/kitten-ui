import React from 'react';
import { Portal, PortalProps } from './Portal';

export interface OptionalPortalProps extends PortalProps {
  withinPortal?: boolean;
}

export function OptionalPortal({
  withinPortal = true,
  children,
  ...others
}: OptionalPortalProps) {
  if (withinPortal) {
    return <Portal {...others}>{children}</Portal>;
  }

  return <React.Fragment>{children}</React.Fragment>;
}

OptionalPortal.displayName = 'OptionalPortal';
