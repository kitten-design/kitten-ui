import {
  DefaultProps,
  getVariant,
  KittenColor,
  KittenRadius,
  rem,
} from 'kitten-styles';
import { createPolymorphicComponent } from '@kitten/utils';
import React from 'react';
import { Box } from '../Box';
import { CloseButton } from '../Button';
import { Loader } from '../Loader';
import { Text } from '../Text';
import { useToastStyles } from './Toast.style';

export interface ToastProps extends DefaultProps {
  onClose?(): void;
  color?: KittenColor;
  radius?: KittenRadius;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  loading?: boolean;
  withCloseButton?: boolean;
  closeButtonProps?: Record<string, any>;
}

export const Toast = createPolymorphicComponent<'div', ToastProps>(
  (props, ref) => {
    const {
      className,
      color,
      radius,
      loading,
      withCloseButton,
      title,
      icon,
      children,
      onClose,
      closeButtonProps,
      ...others
    } = props;

    const classes = useToastStyles(props);
    const colors = getVariant({ variant: 'filled', color });

    return (
      <Box
        ref={ref}
        className={classes.root}
        data-with-icon={!!icon || loading || undefined}
        role="alert"
        {...others}>
        {icon && !loading && <div className={classes.icon}>{icon}</div>}
        {loading && (
          <Loader
            size={rem(28)}
            color={colors.background}
            className={classes.loader}
          />
        )}

        <div className={classes.body}>
          {title && (
            <Text className={classes.title} size="sm" weight="medium">
              {title}
            </Text>
          )}

          <Text color="dimmed" className={classes.description} size="sm">
            {children}
          </Text>
        </div>

        {withCloseButton && (
          <CloseButton
            iconSize={16}
            color="gray"
            {...closeButtonProps}
            onClick={onClose}
            className={classes.closeButton}
          />
        )}
      </Box>
    );
  },
);

Toast.displayName = 'Toast';
Toast.defaultProps = { withCloseButton: false, radius: 'sm' };
