import { cx, DefaultProps, KittenToastPosition } from 'kitten-styles';
import React, { useEffect, useRef } from 'react';
import { TransitionStatus } from 'react-transition-group';
import { Toast } from './Toast';
import { toast } from './Toast.event';
import { ToastConfigWithId } from './Toast.store';
import useToastWrapStyle from './ToastWrap.style';

function getAutoClose(
  autoClose?: boolean | number,
  toasterAutoClose?: boolean | number,
) {
  if (typeof toasterAutoClose === 'number') {
    return toasterAutoClose;
  }

  if (toasterAutoClose === false || autoClose === false) {
    return false;
  }

  return autoClose;
}

export interface ToastWrapProps extends DefaultProps {
  position: KittenToastPosition;
  data: ToastConfigWithId;
  state: TransitionStatus;
  maxHeight: number | string;
  duration: number;
  autoClose?: boolean | number;
  innerRef: React.ForwardedRef<HTMLDivElement>;
}

export default function ToastWrap({
  state,
  data,
  duration,
  autoClose,
  innerRef,
  maxHeight,
  position,
  ...others
}: ToastWrapProps) {
  const {
    autoClose: toasterAutoClose,
    message,
    className,
    withCloseButton,
    ...dataOthers
  } = data;
  const autoCloseTimeout = getAutoClose(autoClose, toasterAutoClose);

  const hideTimeout = useRef<number>();

  const handleHide = () => {
    toast.hide(data.id);
    window.clearTimeout(hideTimeout.current);
  };

  const cancelDelayedHide = () => {
    clearTimeout(hideTimeout.current);
  };

  const handleDelayedHide = () => {
    if (typeof autoCloseTimeout === 'number') {
      hideTimeout.current = window.setTimeout(handleHide, autoCloseTimeout);
    }
  };

  useEffect(() => {
    if (typeof data.onOpen === 'function') {
      data.onOpen(data);
    }
  }, []);

  useEffect(() => {
    handleDelayedHide();
    return cancelDelayedHide;
  }, [autoClose, data.autoClose]);

  const style = useToastWrapStyle({
    state,
    position,
    transitionDuration: duration,
    maxHeight,
  });

  return (
    <div style={style}>
      <Toast
        {...dataOthers}
        {...others}
        withCloseButton={withCloseButton ?? !autoCloseTimeout}
        className={cx('inline-flex max-w-full', className)}
        onClose={handleHide}
        onMouseEnter={cancelDelayedHide}
        onMouseLeave={handleDelayedHide}
        ref={innerRef}>
        {message}
      </Toast>
    </div>
  );
}

ToastWrap.displayName = 'ToastWrap';
