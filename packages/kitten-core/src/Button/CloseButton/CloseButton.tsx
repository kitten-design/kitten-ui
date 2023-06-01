import { rem } from 'kitten-styles';
import { createPolymorphicComponent } from 'kitten-utils';
import React from 'react';
import { ActionIcon, ActionIconProps } from '../ActionIcon/ActionIcon';
import { CloseIcon } from './CloseIcon';

export interface CloseButtonProps
  extends Omit<ActionIconProps, 'children'>,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> {
  iconSize?: number | string;
}

const iconSizes: Record<string, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 28,
  xl: 34,
};

export const CloseButton = createPolymorphicComponent<
  'button',
  CloseButtonProps
>((props, ref) => {
  const { iconSize, size, children, ...others } = props;
  const _iconSize = rem(iconSize || iconSizes[size!]);
  return (
    <ActionIcon ref={ref} size={size} {...others}>
      {children || <CloseIcon width={_iconSize} height={_iconSize} />}
    </ActionIcon>
  );
});

CloseButton.displayName = 'CloseButton';
CloseButton.defaultProps = {
  color: 'gray',
  size: 'sm',
  radius: 'sm',
  variant: 'subtle',
};
