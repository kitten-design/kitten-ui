import { FloatingDelayGroup } from '@floating-ui/react';
import type { FC } from 'react';
import React from 'react';

import { TooltipGroupProvider } from './TooltipGroup.context';

export interface TooltipGroupProps {
  children: React.ReactNode;
  openDelay?: number;
  closeDelay?: number;
}

export const TooltipGroup: FC<TooltipGroupProps> = (props) => {
  const { children, openDelay, closeDelay } = props;

  return (
    <TooltipGroupProvider value>
      <FloatingDelayGroup delay={{ open: openDelay, close: closeDelay }}>
        {children}
      </FloatingDelayGroup>
    </TooltipGroupProvider>
  );
};

TooltipGroup.displayName = 'TooltipGroup';
TooltipGroup.defaultProps = {
  openDelay: 0,
  closeDelay: 0,
};
