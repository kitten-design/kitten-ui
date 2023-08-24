import { useId } from '@kitten-ui/hooks';
import { cx } from '@kitten-ui/styles/css';
import { styled } from '@kitten-ui/styles/jsx';
import { cpc } from '@kitten-ui/utils';
import type { ReactNode } from 'react';
import React from 'react';

import { CloseButton } from '../CloseButton';
import type { AlertVariantsProps } from './Alert.style';
import { alert } from './Alert.style';

export type AlertProps = AlertVariantsProps & {
  title?: ReactNode;
  icon?: ReactNode;
  withCloseButton?: boolean;
  onClose?(): void;
};

export const Alert = cpc<'div', AlertProps>((props, ref) => {
  const {
    id,
    className,
    children,
    variant,
    icon,
    title,
    withCloseButton,
    onClose,
    colorPalette,
    ...others
  } = props;

  const classes = alert({ variant });

  const rootId = useId(id);
  const titleId = (title && `${rootId}-title`) || undefined;
  const bodyId = `${rootId}-body`;

  return (
    <styled.div
      id={rootId}
      data-alert
      ref={ref}
      className={cx(classes.root, className)}
      colorPalette={colorPalette}
      {...others}
      role="alert">
      <div data-alert-wrapper className={classes.wrapper}>
        {icon && (
          <div data-alert-icon className={classes.icon}>
            {icon}
          </div>
        )}
        <div data-alert-body className={classes.body}>
          {title && (
            <div
              id={titleId}
              data-alert-title
              data-with-close-button={withCloseButton || undefined}
              className={classes.title}>
              {title}
            </div>
          )}

          <div data-alert-message id={bodyId} className={classes.message}>
            {children}
          </div>
        </div>

        {withCloseButton && (
          <CloseButton
            className={classes.closeButton}
            colorPalette={colorPalette}
            onClick={onClose}
            size="md"
          />
        )}
      </div>
    </styled.div>
  );
});

Alert.displayName = 'Alert';
Alert.defaultProps = {
  rounded: 'xs',
  colorPalette: 'blue',
};
