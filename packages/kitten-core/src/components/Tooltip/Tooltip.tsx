import { FloatingArrow, useMergeRefs } from '@floating-ui/react';
import { cpc, isElement } from '@kitten-ui/utils';
import type { ReactNode } from 'react';
import React, { cloneElement, Fragment, useRef } from 'react';

import { OptionalPortal } from '../Portal';
import { Transition, type TransitionOverride } from '../Transition';
import type { TooltipRootProps, TooltipRootVariants } from './Tooltip.style';
import { TooltipRoot } from './Tooltip.style';
import { useTooltip } from './use-tooltip';
export type KittenPlacement = 'end' | 'start';
export type KittenSide = 'top' | 'right' | 'bottom' | 'left';
export type KittenPosition = KittenSide | `${KittenSide}-${KittenPlacement}`;
export type TooltipEvents = {
  hover?: boolean;
  focus?: boolean;
  touch?: boolean;
};
interface Props extends TooltipRootProps {
  children: ReactNode;
  position?: KittenPosition;
  refProp?: string;
  label: ReactNode;
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
  events?: TooltipEvents;
  positionDependencies?: any[];
  inline?: boolean;
  keepMounted?: boolean;
}

export type TooltipProps = Props & TooltipRootVariants;

export const Tooltip = cpc<'div', TooltipProps>((props, ref) => {
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
    label,
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
      'Tooltip component children should be an element or a component',
    );
  }

  const tooltip = useTooltip({
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
    tooltip.reference,
    (children as any).ref,
    ref,
  ]);

  return (
    <Fragment>
      <OptionalPortal withinPortal={withinPortal}>
        <Transition
          keepMounted={keepMounted}
          mounted={!disabled && tooltip.opened}
          {...transitionProps}
          transition={transitionProps!.transition || 'fade'}
          duration={
            tooltip.isGroupPhase ? 10 : transitionProps!.duration ?? 100
          }>
          {(transitionStyles) => (
            <TooltipRoot
              ref={ref}
              data-tooltip
              {...others}
              {...tooltip.getFloatingProps({
                ref: tooltip.floating,
                style: {
                  ...style,
                  ...transitionStyles,
                  top: tooltip.y ?? 0,
                  left: tooltip.x ?? 0,
                },
              })}
              hidden={tooltip.referenceHidden}>
              <span data-tooltip-label>{label}</span>

              {withArrow && (
                <FloatingArrow
                  data-tooltip-arrow
                  ref={arrowRef}
                  context={tooltip.context}
                  height={arrowSize}
                  width={arrowSize! * 2}
                  tipRadius={arrowRadius}
                />
              )}
            </TooltipRoot>
          )}
        </Transition>
      </OptionalPortal>
      {cloneElement(
        children,
        tooltip.getReferenceProps({
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
Tooltip.displayName = 'Tooltip';
Tooltip.defaultProps = {
  position: 'top',
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
  events: { hover: true, focus: false, touch: false },
  positionDependencies: [],
};
