import { useDidUpdate } from '@kitten-ui/hooks';
import { isFunction } from '@kitten-ui/utils';
import { useEffect, useRef, useState } from 'react';

export type TransitionStatus =
  | 'entered'
  | 'exited'
  | 'entering'
  | 'exiting'
  | 'pre-exiting'
  | 'pre-entering';

interface UseTransitionInput {
  duration: number;
  exitDuration: number;
  timingFunction?: string;
  mounted: boolean;
  onEnter?(): void;
  onExit?(): void;
  onEntered?(): void;
  onExited?(): void;
}

export function useTransition({
  duration,
  exitDuration,
  timingFunction,
  mounted,
  onEnter,
  onExit,
  onEntered,
  onExited,
}: UseTransitionInput) {
  // TODO: 添加 prefers-reduced-motion
  const reduceMotion = false;
  const [transitionDuration, setTransitionDuration] = useState(reduceMotion ? 0 : duration);
  const [transitionStatus, setStatus] = useState<TransitionStatus>(mounted ? 'entered' : 'exited');
  const timeoutRef = useRef<number>(-1);

  const handleStateChange = (shouldMount: boolean) => {
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;

    setStatus(shouldMount ? 'pre-entering' : 'pre-exiting');
    window.clearTimeout(timeoutRef.current);

    const newTransitionDuration = reduceMotion ? 0 : shouldMount ? duration : exitDuration;
    setTransitionDuration(newTransitionDuration);

    if (newTransitionDuration === 0) {
      isFunction(preHandler) && preHandler();
      isFunction(handler) && handler();
      setStatus(shouldMount ? 'entered' : 'exited');
    } else {
      const preStateTimeout = window.setTimeout(() => {
        isFunction(preHandler) && preHandler();
        setStatus(shouldMount ? 'entering' : 'exiting');
      }, 10);

      timeoutRef.current = window.setTimeout(() => {
        window.clearTimeout(preStateTimeout);
        isFunction(handler) && handler();
        setStatus(shouldMount ? 'entered' : 'exited');
      }, newTransitionDuration);
    }
  };

  useDidUpdate(() => {
    handleStateChange(mounted);
  }, [mounted]);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || 'ease',
  };
}
