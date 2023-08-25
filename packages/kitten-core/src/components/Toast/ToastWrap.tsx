import React, { useEffect, useRef } from 'react';
import type { TransitionStatus } from 'react-transition-group';

import { Transition } from '../Transition';
import { Toast } from './Toast';
import type { ToastConfigWithId } from './Toast.event';
import { toast } from './Toast.event';

const getAutoClose = (
  autoClose?: boolean | number,
  toasterAutoClose?: boolean | number,
) => {
  if (typeof toasterAutoClose === 'number') {
    return toasterAutoClose;
  }

  if (toasterAutoClose === false || autoClose === false) {
    return false;
  }

  return autoClose;
};

export interface ToastWrapProps {
  data: ToastConfigWithId;
  state: TransitionStatus;
  maxHeight: number | string;
  duration: number;
  autoClose?: boolean | number;
  innerRef: React.ForwardedRef<HTMLDivElement>;
}

export default function ToastWrap({
  data,
  state,
  autoClose,
  innerRef,
}: ToastWrapProps) {
  const { autoClose: toasterAutoClose, message, withCloseButton } = data;
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

  return (
    <Transition transition="pop" mounted={state === 'entered'}>
      {(style) => {
        return (
          <Toast
            {...data}
            ref={innerRef}
            style={{ ...style }}
            my="xs"
            withCloseButton={withCloseButton ?? !autoCloseTimeout}
            onMouseEnter={cancelDelayedHide}
            onMouseLeave={handleDelayedHide}
            onClose={handleHide}>
            {message}
          </Toast>
        );
      }}
    </Transition>
  );
}

ToastWrap.displayName = 'ToastWrap';
