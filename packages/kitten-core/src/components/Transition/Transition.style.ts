import type { Property } from '@kitten-ui/styles/types/csstype';
import type React from 'react';

import type { KittenTransition } from './transitions';
import { transitions } from './transitions';

const transitionStatuses = {
  entering: 'in',
  entered: 'in',
  exiting: 'out',
  exited: 'out',
  'pre-exiting': 'out',
  'pre-entering': 'out',
} as const;

export function getTransitionStyles({
  transition,
  state,
  duration,
  timingFunction,
}: {
  transition: KittenTransition;
  state: keyof typeof transitionStatuses;
  duration: number;
  timingFunction: Property.TransitionTimingFunction;
}): React.CSSProperties {
  const shared = {
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timingFunction,
  };

  if (typeof transition === 'string') {
    if (!(transition in transitions)) {
      return {};
    }

    return {
      transitionProperty: transitions[transition].transitionProperty,
      ...shared,
      ...transitions[transition].common,
      ...transitions[transition][transitionStatuses[state]],
    };
  }

  return {
    transitionProperty: transition.transitionProperty,
    ...shared,
    ...transition.common,
    ...transition[transitionStatuses[state]],
  };
}
