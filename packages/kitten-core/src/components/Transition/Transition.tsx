import type { CSSProperties, FC, ReactElement } from 'react';
import React, { Fragment, useEffect, useState } from 'react';

import { getTransitionStyles } from './Transition.style';
import type { KittenTransition } from './transitions';
import { useTransition } from './use-transition';

export interface TransitionProps {
  keepMounted?: boolean;
  transition: KittenTransition;
  duration?: number;
  exitDuration?: number;
  timingFunction?: string;
  mounted?: boolean;
  children(styles: CSSProperties): ReactElement<any, any>;
  onExited?: () => void;
  onExit?: () => void;
  onEnter?: () => void;
  onEntered?: () => void;
}

export type TransitionOverride = Partial<Omit<TransitionProps, 'mounted'>>;

export const Transition: FC<TransitionProps> = (props) => {
  const {
    keepMounted,
    transition,
    duration = 250,
    exitDuration = duration,
    mounted: _mounted,
    children,
    timingFunction,
    onExit,
    onEntered,
    onEnter,
    onExited,
  } = props;
  const [__mounted, setMounted] = useState(false);
  const mounted = _mounted ?? __mounted;
  useEffect(() => {
    setMounted(true);
  }, []);

  const { transitionDuration, transitionStatus, transitionTimingFunction } = useTransition({
    mounted,
    exitDuration,
    duration,
    timingFunction,
    onExit,
    onEntered,
    onEnter,
    onExited,
  });

  const styles = getTransitionStyles({
    transition,
    duration: transitionDuration,
    state: transitionStatus,
    timingFunction: transitionTimingFunction,
  });

  if (transitionDuration === 0) {
    return mounted ? (
      <Fragment>{children({})}</Fragment>
    ) : keepMounted ? (
      children({ display: 'none' })
    ) : null;
  }

  return transitionStatus === 'exited' ? (
    keepMounted ? (
      children({ display: 'none' })
    ) : null
  ) : (
    <Fragment>{children(styles)}</Fragment>
  );
};

Transition.displayName = 'Transition';
Transition.defaultProps = {};
