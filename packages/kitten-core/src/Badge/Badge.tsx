import {
  DefaultProps,
  getZIndex,
  KittenColor,
  KittenPosition,
  KittenRadius,
} from 'kitten-styles';
import { createPolymorphicComponent } from '@kitten/utils';
import React from 'react';
import { Box } from '../Box';
import { useBadgeStyles } from './Badge.style';

export interface BadgeProps extends DefaultProps {
  children?: React.ReactNode;
  position?: KittenPosition;
  offset?: number;
  inline?: boolean;
  size?: number | string;
  radius?: KittenRadius;
  color?: KittenColor;
  withBorder?: boolean;
  zIndex?: React.CSSProperties['zIndex'];
  label?: React.ReactNode;
  disabled?: boolean;
}

export const Badge = createPolymorphicComponent<'div', BadgeProps>(
  (props, ref) => {
    const { className, children, disabled, label, ...others } = props;

    const classes = useBadgeStyles(props);

    return (
      <Box ref={ref} className={classes.root} {...others}>
        {!disabled && <div className={classes.label}>{label}</div>}
        {children}
      </Box>
    );
  },
);

Badge.displayName = 'Badge';
Badge.defaultProps = {
  position: 'top-end',
  color: 'red',
  offset: 0,
  inline: true,
  withBorder: false,
  disabled: false,
  size: 10,
  radius: 'full',
  zIndex: getZIndex('app'),
};
