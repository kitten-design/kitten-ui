import {
  DefaultProps,
  getVariant,
  KittenColor,
  KittenGradient,
  KittenRadius,
  KittenSize,
  KittenVariant,
  rem,
} from 'kitten-styles';
import { createPolymorphicComponent } from 'kitten-utils';
import React from 'react';
import { Box } from '../Box';
import { Loader, LoaderProps } from '../Loader/Loader';
import { ActionIcon } from './ActionIcon/ActionIcon';
import { getSizes, useButtonStyles } from './Button.style';
import { ButtonGroup } from './ButtonGroup/ButtonGroup';
import { CloseButton } from './CloseButton/CloseButton';
import { CopyButton } from './CopyButton/CopyButton';

export interface ButtonProps extends DefaultProps {
  type?: 'submit' | 'button' | 'reset';
  radius?: KittenRadius;
  fullWidth?: boolean;
  size?: KittenSize;
  variant?: KittenVariant<
    'filled' | 'outline' | 'light' | 'white' | 'default' | 'subtle' | 'gradient'
  >;
  gradient?: KittenGradient;
  color?: KittenColor;
  compact?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  loading?: boolean;
  loaderPosition?: 'left' | 'right' | 'center';
  loaderProps?: LoaderProps;
  unstyled?: boolean;
}

export const Button = createPolymorphicComponent<
  'button',
  ButtonProps,
  {
    Group: typeof ButtonGroup;
    ActionIcon: typeof ActionIcon;
    CloseButton: typeof CloseButton;
    CopyButton: typeof CopyButton;
  }
>((props, ref) => {
  const {
    className,
    children,
    leftIcon,
    rightIcon,
    loading,
    loaderPosition,
    size,
    color,
    variant,
    compact,
    loaderProps,
    unstyled,
    ...others
  } = props;

  const classes = useButtonStyles(props);

  const colors = getVariant({ variant, color });
  const loader = (
    <Loader
      size={rem(getSizes({ size, compact })[0] / 2)}
      color={colors.color}
      darkColor={colors?.dark?.color}
      {...loaderProps}
    />
  );

  return (
    <Box
      ref={ref}
      className={classes.root}
      data-loading={loading}
      data-button
      {...others}>
      {unstyled ? (
        children
      ) : (
        <div className={classes.inner}>
          {(leftIcon || (loading && loaderPosition === 'left')) && (
            <span className={classes.leftIcon}>
              {loading && loaderPosition === 'left'
                ? loader
                : React.cloneElement(leftIcon!, {
                    size: rem(getSizes({ size, compact })[0] / 2),
                  })}
            </span>
          )}

          {loading && loaderPosition === 'center' && (
            <span className={classes.centerIcon}>{loader}</span>
          )}

          <span className={classes.label}>{children}</span>

          {(rightIcon || (loading && loaderPosition === 'right')) && (
            <span className={classes.rightIcon}>
              {loading && loaderPosition === 'right'
                ? loader
                : React.cloneElement(rightIcon!, {
                    size: rem(getSizes({ size, compact })[0] / 2),
                  })}
            </span>
          )}
        </div>
      )}
    </Box>
  );
});

Button.Group = ButtonGroup;
Button.ActionIcon = ActionIcon;
Button.CloseButton = CloseButton;
Button.CopyButton = CopyButton;

Button.displayName = 'Button';
Button.defaultProps = {
  as: 'button',
  radius: 'sm',
  size: 'sm',
  variant: 'filled',
  loaderPosition: 'left',
  type: 'button',
};
