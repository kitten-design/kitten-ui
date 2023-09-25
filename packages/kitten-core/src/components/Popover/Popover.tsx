import { useMergeRefs } from '@floating-ui/react';
import { cpc, isElement } from '@kitten-ui/utils';
import type { ReactNode } from 'react';
import React, { cloneElement, Fragment, useRef } from 'react';

import { OptionalPortal } from '../Portal';
import { Transition, type TransitionOverride } from '../Transition';
import type { PopoverRootProps, PopoverRootVariants } from './Popover.style';
import { PopoverRoot } from './Popover.style';
import { PopoverArrow } from './PopoverArrow';
import { usePopover } from './use-popover';
export type KittenPlacement = 'end' | 'start';
export type KittenSide = 'top' | 'right' | 'bottom' | 'left';
export type KittenPosition = KittenSide | `${KittenSide}-${KittenPlacement}`;
export type PopoverEvents = {
  hover?: boolean;
  focus?: boolean;
  touch?: boolean;
  click?: boolean;
};

interface Props extends Omit<PopoverRootProps, 'content'> {
  children: ReactNode;
  position?: KittenPosition;
  refProp?: string;
  content: ReactNode;
  withinPortal?: boolean;
  multiline?: boolean;
  width?: number | 'auto';
  disabled?: boolean;
  variant?: string;
  onPositionChange?(position: KittenPosition): void;
  openDelay?: number;
  closeDelay?: number;
  opened?: boolean;
  offset?: number;
  withArrow?: boolean;
  arrowSize?: number;
  arrowOffset?: number;
  arrowRadius?: number;
  transitionProps?: TransitionOverride;
  events?: PopoverEvents;
  positionDependencies?: any[];
  inline?: boolean;
  keepMounted?: boolean;
}

export type PopoverProps = Props & PopoverRootVariants;

export const Popover = cpc<'div', PopoverProps>((props, ref) => {
  const arrowRef = useRef<SVGSVGElement>(null);
  const {
    withinPortal,
    keepMounted,
    disabled,
    position,
    closeDelay,
    openDelay,
    onPositionChange,
    opened,
    events,
    arrowOffset,
    offset,
    withArrow,
    arrowSize,
    positionDependencies,
    children,
    inline,
    transitionProps,
    arrowRadius,
    content,
    style,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onPointerDown,
    onPointerEnter,
    refProp,
    ...others
  } = props;

  if (!isElement(children)) {
    throw new Error(
      'Popover component children should be an element or a component',
    );
  }

  const popover = usePopover({
    position: position!,
    closeDelay,
    openDelay,
    onPositionChange,
    opened,
    events: events!,
    arrowRef,
    arrowOffset: arrowOffset!,
    offset: offset! + (withArrow ? arrowSize! / 2 : 0),
    positionDependencies: [...positionDependencies!, children],
    inline: inline!,
  });

  const targetRef = useMergeRefs([
    popover.reference,
    (children as any).ref,
    ref,
  ]);

  return (
    <Fragment>
      <OptionalPortal withinPortal={withinPortal}>
        <Transition
          keepMounted={keepMounted}
          mounted={!disabled && popover.opened}
          {...transitionProps}
          transition={transitionProps!.transition || 'fade'}
          duration={transitionProps!.duration ?? 100}>
          {(transitionStyles) => (
            <PopoverRoot
              ref={ref}
              data-popover
              {...others}
              {...popover.getFloatingProps({
                ref: popover.floating,
                style: {
                  ...style,
                  ...transitionStyles,
                  top: popover.y ?? 0,
                  left: popover.x ?? 0,
                },
              })}
              hidden={popover.referenceHidden}>
              <span data-popover-content>{content}</span>

              {withArrow && (
                <PopoverArrow
                  data-popover-arrow
                  ref={arrowRef}
                  context={popover.context}
                  height={arrowSize}
                  width={arrowSize! * 2}
                  strokeWidth={0.1}
                  tipRadius={arrowRadius}
                />
              )}
            </PopoverRoot>
          )}
        </Transition>
      </OptionalPortal>
      {cloneElement(
        children,
        popover.getReferenceProps({
          onClick,
          onMouseEnter,
          onMouseLeave,
          onMouseMove,
          onPointerDown,
          onPointerEnter,
          [refProp!]: targetRef,

          ...children.props,
        }),
      )}
    </Fragment>
  );
});
Popover.displayName = 'Popover';
Popover.defaultProps = {
  position: 'bottom',
  refProp: 'ref',
  withinPortal: false,
  withArrow: true,
  inline: false,
  arrowSize: 6,
  arrowOffset: 4,
  arrowRadius: 1,
  offset: 6,
  transitionProps: { duration: 100, transition: 'fade' },
  width: 'auto',
  events: { click: true },
  positionDependencies: [],
};
