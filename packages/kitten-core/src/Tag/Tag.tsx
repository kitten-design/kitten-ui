import type {
  DefaultProps,
  KittenColor,
  KittenGradient,
  KittenRadius,
  KittenSize,
  KittenVariant,
} from 'kitten-styles';
import { createPolymorphicComponent } from '@kitten-ui/utils';
import React from 'react';
import { Box } from '../Box';
import { useTagStyles } from './Tag.style';

export interface TagProps extends DefaultProps {
  color?: KittenColor;
  variant?: KittenVariant<'light' | 'filled' | 'outline' | 'gradient'>;
  gradient?: KittenGradient;
  size?: KittenSize;
  radius?: KittenRadius;
  fullWidth?: boolean;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export const Tag = createPolymorphicComponent<'div', TagProps>((props, ref) => {
  const { className, children, left, right, ...others } = props;

  const classes = useTagStyles(props);

  return (
    <Box ref={ref} className={classes.root} {...others}>
      {left && <span className={classes.left}>{left}</span>}
      <span className={classes.inner}>{children}</span>
      {right && <span className={classes.right}>{right}</span>}
    </Box>
  );
});

Tag.displayName = 'Tag';
Tag.defaultProps = {
  variant: 'light',
  size: 'md',
  radius: 'xl',
};
