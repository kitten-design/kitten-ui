import { useId } from 'kitten-hooks';
import type {
  DefaultProps,
  KittenColor,
  KittenRadius,
  KittenVariant,
} from 'kitten-styles';
import { createPolymorphicComponent } from '@kitten/utils';
import React from 'react';
import { Box } from '../Box';
import { CloseButton } from '../Button';
import { useAlertStyles } from './Alert.style';

export interface AlertProps extends DefaultProps {
  title?: React.ReactNode;
  variant?: KittenVariant<'filled' | 'outline' | 'light'>;
  children: React.ReactNode;
  color?: KittenColor;
  icon?: React.ReactNode;
  withCloseButton?: boolean;
  onClose?(): void;
  closeButtonLabel?: string;
  radius?: KittenRadius;
}

export const Alert = createPolymorphicComponent<'div', AlertProps>(
  (props, ref) => {
    const {
      id,
      className,
      title,
      variant,
      children,
      color,
      icon,
      onClose,
      radius,
      withCloseButton,
      closeButtonLabel,
      ...others
    } = props;

    const classes = useAlertStyles(props);

    const rootId = useId(id);
    const titleId = `${rootId}-title`;
    const bodyId = `${rootId}-body`;

    return (
      <Box
        id={rootId}
        ref={ref}
        role="alert"
        aria-labelledby={titleId}
        aria-describedby={bodyId}
        className={classes.root}
        {...others}>
        <div className={classes.wrapper}>
          {icon && <div className={classes.icon}>{icon}</div>}

          <div className={classes.body}>
            {title && (
              <div
                className={classes.title}
                data-with-close-button={withCloseButton}>
                <span id={titleId} className={classes.label}>
                  {title}
                </span>
              </div>
            )}

            <div id={bodyId} className={classes.message}>
              {children}
            </div>
          </div>

          {withCloseButton && (
            <CloseButton
              color={color}
              className={classes.closeButton}
              onClick={onClose}
              variant={
                variant === 'filled'
                  ? 'filled'
                  : variant === 'light'
                  ? 'light'
                  : 'subtle'
              }
              size={16}
              iconSize={16}
              aria-label={closeButtonLabel}
            />
          )}
        </div>
      </Box>
    );
  },
);

Alert.displayName = 'Alert';
Alert.defaultProps = { variant: 'filled', radius: 'sm', color: 'primary' };
