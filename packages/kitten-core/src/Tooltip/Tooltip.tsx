import { FloatingArrow, useMergeRefs } from '@floating-ui/react';
import {
  DefaultProps,
  getZIndex,
  KittenColor,
  KittenPlacement,
  KittenSize,
} from '@kitten-ui/styles';
import { createPolymorphicComponent, isElement } from '@kitten-ui/utils';
import React, { cloneElement, useRef } from 'react';
import { Box } from '../Box';
import { OptionalPortal } from '../Portal';
import { Transition, TransitionOverride } from '../Transition';
import { useTooltipStyles } from './Tooltip.style';
import { TooltipGroup } from './TooltipGroup/TooltipGroup';
import { useTooltip } from './use-tooltip';

export interface TooltipProps extends DefaultProps {
  children: React.ReactNode;
  position?: KittenPlacement;
  refProp?: string;
  label: React.ReactNode;
  withinPortal?: boolean;
  radius?: KittenSize;
  color?: KittenColor;
  multiline?: boolean;
  width?: number | 'auto';
  zIndex?: React.CSSProperties['zIndex'];
  disabled?: boolean;
  variant?: string;
  onPositionChange?(position: KittenPlacement): void;
  openDelay?: number;
  closeDelay?: number;
  opened?: boolean;
  offset?: number;
  withArrow?: boolean;
  arrowSize?: number;
  arrowOffset?: number;
  arrowRadius?: number;
  transitionProps?: TransitionOverride;
  events?: { hover: boolean; focus: boolean; touch: boolean };
  positionDependencies?: any[];
  inline?: boolean;
  keepMounted?: boolean;
}

export const Tooltip = createPolymorphicComponent<
  'div',
  TooltipProps,
  { Group: typeof TooltipGroup }
>((props, ref) => {
  const arrowRef = useRef<SVGSVGElement>(null);
  const {
    arrowOffset,
    arrowRadius,
    arrowSize,
    children,
    className,
    closeDelay,
    color,
    disabled,
    events,
    inline,
    keepMounted,
    label,
    multiline,
    offset,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onPositionChange,
    openDelay,
    opened,
    position,
    positionDependencies,
    radius,
    refProp,
    style,
    transitionProps,
    variant,
    width,
    withArrow,
    withinPortal,
    zIndex,
    ...others
  } = props;

  const classes = useTooltipStyles(props);

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
  console.log(children);
  if (!isElement(children)) {
    throw new Error(
      'Tooltip component children should be an element or a component',
    );
  }

  const targetRef = useMergeRefs([
    tooltip.reference,
    (children as any).ref,
    ref,
  ]);

  return (
    <React.Fragment>
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
            <Box
              {...others}
              {...tooltip.getFloatingProps({
                ref: tooltip.floating,
                className: classes.tooltip,
                style: {
                  ...style,
                  ...transitionStyles,
                  zIndex,
                  top: tooltip.y ?? 0,
                  left: tooltip.x ?? 0,
                },
              })}
              hidden={tooltip.referenceHidden}>
              {label}

              {withArrow && (
                <FloatingArrow
                  ref={arrowRef}
                  context={tooltip.context}
                  className={classes.arrow}
                  height={arrowSize}
                  width={arrowSize! * 2}
                  tipRadius={arrowRadius}
                />
              )}
            </Box>
          )}
        </Transition>
      </OptionalPortal>
      {cloneElement(
        children,
        tooltip.getReferenceProps({
          onClick,
          onMouseEnter,
          onMouseLeave,
          onMouseMove: props.onMouseMove,
          onPointerDown: props.onPointerDown,
          onPointerEnter: props.onPointerEnter,
          [refProp!]: targetRef,
          className: classes.root,
          ...children.props,
        }),
      )}
    </React.Fragment>
  );
});
Tooltip.Group = TooltipGroup;
Tooltip.displayName = 'Tooltip';
Tooltip.defaultProps = {
  position: 'top',
  refProp: 'ref',
  withinPortal: false,
  inline: false,
  arrowSize: 6,
  arrowOffset: 4,
  arrowRadius: 1,
  offset: 6,
  transitionProps: { duration: 100, transition: 'fade' },
  width: 'auto',
  events: { hover: true, focus: false, touch: false },
  zIndex: getZIndex('popover'),
  positionDependencies: [],
  radius: 'sm',
};
