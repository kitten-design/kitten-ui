import { getChildrenByType } from '@kitten-ui/utils';
import { cpc, rem } from '@kitten-ui/utils';
import React from 'react';

import { Button } from '../Button';
import type {
  ButtonGroupRootProps,
  ButtonGroupRootVariants,
} from './ButtonGroup.style';
import { ButtonGroupRoot } from './ButtonGroup.style';

export interface Props extends ButtonGroupRootProps {
  buttonBorderWidth?: number;
}

export type ButtonGroupProps = Props & ButtonGroupRootVariants;

export const ButtonGroup = cpc<'div', ButtonGroupProps>((props, ref) => {
  const { children, buttonBorderWidth = 1, style, ...others } = props;

  const buttons = getChildrenByType(children, Button);

  return (
    <ButtonGroupRoot
      ref={ref}
      style={{ '--border-width': rem(buttonBorderWidth / 2), ...style }}
      {...others}>
      {buttons}
    </ButtonGroupRoot>
  );
});
ButtonGroup.displayName = 'ButtonGroup';
