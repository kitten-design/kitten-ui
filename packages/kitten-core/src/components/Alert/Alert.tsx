import { useId } from '@kitten-ui/hooks';
import { cpc } from '@kitten-ui/utils';
import type { ReactNode } from 'react';
import React from 'react';

import { CloseButton } from '../CloseButton';
import type { AlertRootProps, AlertRootVariants } from './Alert.style';
import { AlertRoot } from './Alert.style';

interface Props extends Omit<AlertRootProps, 'title'> {
  title?: ReactNode;
  icon?: ReactNode;
  withCloseButton?: boolean;
  onClose?(): void;
}

export type AlertProps = Props & AlertRootVariants;

export const Alert = cpc<'div', AlertProps>((props, ref) => {
  const {
    id,
    children,
    icon,
    title,
    withCloseButton,
    onClose,
    colorPalette,
    ...others
  } = props;

  const rootId = useId(id);
  const titleId = (title && `${rootId}-title`) || undefined;
  const bodyId = `${rootId}-body`;

  return (
    <AlertRoot
      id={rootId}
      data-alert
      ref={ref}
      colorPalette={colorPalette}
      {...others}
      role="alert">
      <div data-alert-wrapper>
        {icon && <div data-alert-icon>{icon}</div>}
        <div data-alert-body>
          {title && (
            <div
              id={titleId}
              data-alert-title
              data-with-close-button={withCloseButton || undefined}>
              {title}
            </div>
          )}

          <div data-alert-message id={bodyId}>
            {children}
          </div>
        </div>

        {withCloseButton && (
          <CloseButton
            data-alert-close-button
            colorPalette={colorPalette}
            onClick={onClose}
            size="md"
          />
        )}
      </div>
    </AlertRoot>
  );
});

Alert.displayName = 'Alert';
Alert.defaultProps = {
  rounded: 'xs',
  colorPalette: 'blue',
};
