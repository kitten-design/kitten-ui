import type { Property } from '@kitten-ui/styles/types/csstype';
import { rem } from '@kitten-ui/utils';
import type { CSSProperties } from 'react';

export interface KittenTransitionStyles {
  common?: CSSProperties;
  in: CSSProperties;
  out: CSSProperties;
  transitionProperty: Property.TransitionProperty;
}

export type KittenTransitionName =
  | 'fade'
  | 'skew-up'
  | 'skew-down'
  | 'rotate-right'
  | 'rotate-left'
  | 'slide-down'
  | 'slide-up'
  | 'slide-right'
  | 'slide-left'
  | 'scale-y'
  | 'scale-x'
  | 'scale'
  | 'pop'
  | 'pop-top-left'
  | 'pop-top-right'
  | 'pop-bottom-left'
  | 'pop-bottom-right';

export type KittenTransition = KittenTransitionName | KittenTransitionStyles;

const popIn = {
  in: { opacity: 1, transform: 'scale(1)' },
  out: { opacity: 0, transform: `scale(.9) translateY(${rem(10)})` },
  transitionProperty: 'transform, opacity',
};

export const transitions: Record<KittenTransitionName, KittenTransitionStyles> =
  {
    fade: {
      in: { opacity: 1 },
      out: { opacity: 0 },
      transitionProperty: 'opacity',
    },

    scale: {
      in: { opacity: 1, transform: 'scale(1)' },
      out: { opacity: 0, transform: 'scale(0)' },
      common: { transformOrigin: 'top' },
      transitionProperty: 'transform, opacity',
    },

    'scale-y': {
      in: { opacity: 1, transform: 'scaleY(1)' },
      out: { opacity: 0, transform: 'scaleY(0)' },
      common: { transformOrigin: 'top' },
      transitionProperty: 'transform, opacity',
    },

    'scale-x': {
      in: { opacity: 1, transform: 'scaleX(1)' },
      out: { opacity: 0, transform: 'scaleX(0)' },
      common: { transformOrigin: 'left' },
      transitionProperty: 'transform, opacity',
    },

    'skew-up': {
      in: { opacity: 1, transform: 'translateY(0) skew(0deg, 0deg)' },
      out: {
        opacity: 0,
        transform: `translateY(-${rem(20)}) skew(-10deg, -5deg)`,
      },
      common: { transformOrigin: 'top' },
      transitionProperty: 'transform, opacity',
    },

    'skew-down': {
      in: { opacity: 1, transform: 'translateY(0) skew(0deg, 0deg)' },
      out: {
        opacity: 0,
        transform: `translateY(${rem(20)}) skew(-10deg, -5deg)`,
      },
      common: { transformOrigin: 'bottom' },
      transitionProperty: 'transform, opacity',
    },

    'rotate-left': {
      in: { opacity: 1, transform: 'translateY(0) rotate(0deg)' },
      out: { opacity: 0, transform: `translateY(${rem(20)}) rotate(-5deg)` },
      common: { transformOrigin: 'bottom' },
      transitionProperty: 'transform, opacity',
    },

    'rotate-right': {
      in: { opacity: 1, transform: 'translateY(0) rotate(0deg)' },
      out: { opacity: 0, transform: `translateY(${rem(20)}) rotate(5deg)` },
      common: { transformOrigin: 'top' },
      transitionProperty: 'transform, opacity',
    },

    'slide-down': {
      in: { opacity: 1, transform: 'translateY(0)' },
      out: { opacity: 0, transform: 'translateY(-100%)' },
      common: { transformOrigin: 'top' },
      transitionProperty: 'transform, opacity',
    },

    'slide-up': {
      in: { opacity: 1, transform: 'translateY(0)' },
      out: { opacity: 0, transform: 'translateY(100%)' },
      common: { transformOrigin: 'bottom' },
      transitionProperty: 'transform, opacity',
    },

    'slide-left': {
      in: { opacity: 1, transform: 'translateX(0)' },
      out: { opacity: 0, transform: 'translateX(100%)' },
      common: { transformOrigin: 'left' },
      transitionProperty: 'transform, opacity',
    },

    'slide-right': {
      in: { opacity: 1, transform: 'translateX(0)' },
      out: { opacity: 0, transform: 'translateX(-100%)' },
      common: { transformOrigin: 'right' },
      transitionProperty: 'transform, opacity',
    },

    pop: {
      ...popIn,
      common: { transformOrigin: 'center center' },
    },

    'pop-bottom-left': {
      ...popIn,
      common: { transformOrigin: 'bottom left' },
    },

    'pop-bottom-right': {
      ...popIn,
      common: { transformOrigin: 'bottom right' },
    },

    'pop-top-left': {
      ...popIn,
      common: { transformOrigin: 'top left' },
    },

    'pop-top-right': {
      ...popIn,
      common: { transformOrigin: 'top right' },
    },
  };
