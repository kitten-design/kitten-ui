import { cpc } from '@kitten-ui/utils';
import type { ReactNode } from 'react';
import React from 'react';

import { CloseButton } from '../CloseButton';
import { Loader } from '../Loader';
import type { ToastRootProps, ToastRootVariants } from './Toast.style';
import { ToastRoot } from './Toast.style';

export interface Props extends Omit<ToastRootProps, 'title'> {
  onClose?(): void;
  icon?: ReactNode;
  title?: ReactNode;
  children?: ReactNode;
  loading?: boolean;
  withCloseButton?: boolean;
}

export type ToastProps = Props & ToastRootVariants;

export const Toast = cpc<'div', ToastProps>((props, ref) => {
  const {
    children,
    title,
    icon,
    loading,
    withCloseButton,
    colorPalette,
    onClose,
    ...others
  } = props;

  return (
    <ToastRoot
      data-toast
      data-with-icon={icon || loading || undefined}
      data-with-title={title || undefined}
      ref={ref}
      colorPalette={colorPalette}
      {...others}
      role="alert">
      {icon && !loading && <div data-toast-icon>{icon}</div>}

      {loading && <Loader data-toast-loader colorPalette={colorPalette} />}

      <div data-toast-body>
        {title && <div data-toast-title>{title}</div>}
        <div data-toast-description>{children}</div>
      </div>

      {withCloseButton && (
        <CloseButton
          data-toast-close
          colorPalette={colorPalette}
          onClick={onClose}
          size="md"
        />
      )}
    </ToastRoot>
  );
});
Toast.displayName = 'Toast';
