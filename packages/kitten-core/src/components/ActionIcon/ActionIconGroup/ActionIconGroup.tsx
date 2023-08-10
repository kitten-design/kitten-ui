import { getChildrenByType } from '@kitten-ui/utils';
import React from 'react';

import { cpc, rem } from '../../../utils';
import { ActionIcon } from '../ActionIcon';
import type {
  ActionIconGroupRootProps,
  ActionIconGroupRootVariants,
} from './ActionIconGroup.style';
import { ActionIconGroupRoot } from './ActionIconGroup.style';

export interface Props extends ActionIconGroupRootProps {
  buttonBorderWidth?: number;
}

export type ActionIconGroupProps = Props & ActionIconGroupRootVariants;

export const ActionIconGroup = cpc<'div', ActionIconGroupProps>(
  (props, ref) => {
    const { children, buttonBorderWidth = 1, style, ...others } = props;

    const buttons = getChildrenByType(children, ActionIcon);

    return (
      <ActionIconGroupRoot
        ref={ref}
        style={{ '--border-width': rem(buttonBorderWidth / 2), ...style }}
        {...others}>
        {buttons}
      </ActionIconGroupRoot>
    );
  },
);
ActionIconGroup.displayName = 'ButtonActionIconGroup';
