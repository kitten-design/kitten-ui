import type { DefaultProps } from '@kitten-ui/styles';
import React, { useEffect, useState } from 'react';

import { useTransitionStyles } from './Transition.style';
import type { KittenTransition } from './transitions';
import { useTransition } from './use-transition';

export interface TransitionProps extends DefaultProps {
  keepMounted?: boolean;
  transition: KittenTransition;
  duration?: number;
  exitDuration?: number;
  timingFunction?: string;
  mounted?: boolean;
  children(styles: React.CSSProperties): React.ReactElement<any, any>;
  onExited?: () => void;
  onExit?: () => void;
  onEnter?: () => void;
  onEntered?: () => void;
}

export type TransitionOverride = Partial<Omit<TransitionProps, 'mounted'>>;

export const Transition: React.FC<TransitionProps> = (props) => {
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

  const { transitionDuration, transitionStatus, transitionTimingFunction } =
    useTransition({
      mounted,
      exitDuration,
      duration,
      timingFunction,
      onExit,
      onEntered,
      onEnter,
      onExited,
    });

  const styles = useTransitionStyles({
    transition,
    duration: transitionDuration,
    state: transitionStatus,
    timingFunction: transitionTimingFunction,
  });

  if (transitionDuration === 0) {
    return mounted ? (
      <React.Fragment>{children({})}</React.Fragment>
    ) : keepMounted ? (
      children({ display: 'none' })
    ) : null;
  }

  return transitionStatus === 'exited' ? (
    keepMounted ? (
      children({ display: 'none' })
    ) : null
  ) : (
    <React.Fragment>{children(styles)}</React.Fragment>
  );
};

Transition.displayName = 'Transition';
Transition.defaultProps = {};
