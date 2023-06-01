import {
  DefaultProps,
  KittenColor,
  KittenSize,
  KittenVariant,
} from 'kitten-styles';
import { createPolymorphicComponent } from '@kitten-ui/utils';
import React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import { useDividerStyles } from './Divider.style';

export interface DividerProps extends DefaultProps {
  color?: KittenColor;

  vertical?: boolean;

  size?: KittenSize;

  label?: React.ReactNode;

  labelPosition?: 'left' | 'center' | 'right';

  labelProps?: Record<string, any>;

  variant?: KittenVariant<'solid' | 'dashed' | 'dotted'>;
}

export const Divider = createPolymorphicComponent<'div', DividerProps>(
  (props, ref) => {
    const {
      className,
      color,
      vertical,
      size,
      label,
      labelPosition,
      labelProps,
      variant,
      ...others
    } = props;

    const classes = useDividerStyles(props);

    const withLabel = !!label && !vertical;

    return (
      <Box ref={ref} className={classes.root} role="separator" {...others}>
        {withLabel && (
          <Text
            {...labelProps}
            size={labelProps?.size || 'xs'}
            className={classes.label}>
            {label}
          </Text>
        )}
      </Box>
    );
  },
);

Divider.displayName = 'Divider';
Divider.defaultProps = {
  size: 'xs',
  labelPosition: 'center',
  variant: 'solid',
};
