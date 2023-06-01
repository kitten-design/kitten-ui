import { getVariant, KittenSize } from 'kitten-styles';
import { createPolymorphicComponent } from '@kitten-ui/utils';
import React from 'react';
import { Loader } from '../../Loader/Loader';
import { Button, ButtonProps } from '../Button';
import { useActionIconStyles } from './ActionIcon.style';

export interface ActionIconProps extends Omit<ButtonProps, 'compact' | 'size'> {
  size?: KittenSize | number;
}

export const ActionIcon = createPolymorphicComponent<'button', ActionIconProps>(
  (props, ref) => {
    const {
      className,
      loading,
      loaderProps,
      children,
      variant,
      color,
      size,
      ...others
    } = props;

    const classes = useActionIconStyles(props);

    const colors = getVariant({ variant, color });

    const loader = (
      <Loader
        size="100%"
        color={colors.color}
        darkColor={colors?.dark?.color}
        data-action-icon-loader
        {...loaderProps}
      />
    );

    return (
      <Button
        unstyled
        className={classes.root}
        ref={ref}
        data-loading={loading}
        {...others}>
        {loading ? loader : children}
      </Button>
    );
  },
);

ActionIcon.displayName = 'ActionIcon';
ActionIcon.defaultProps = {
  color: 'gray',
  size: 'md',
  radius: 'sm',
  variant: 'subtle',
};
