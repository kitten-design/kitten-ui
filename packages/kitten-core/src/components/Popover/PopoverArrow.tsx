import type { Alignment, FloatingContext, Side } from '@floating-ui/react';
import { platform } from '@floating-ui/react';
import React from 'react';

interface Style extends React.CSSProperties {
  transform?: string;
}
export interface PopoverArrowProps extends React.SVGAttributes<SVGSVGElement> {
  context: Omit<FloatingContext, 'refs'> & { refs: any };

  width?: number;

  height?: number;

  tipRadius?: number;

  staticOffset?: string | number | null;

  d?: string;

  stroke?: string;

  strokeWidth?: number;

  style?: Style;
}

export const PopoverArrow = React.forwardRef(function PopoverArrow(
  {
    context: {
      placement,
      elements: { floating },
      middlewareData: { arrow },
    },
    width = 14,
    height = 7,
    tipRadius = 0,
    strokeWidth = 0,
    staticOffset,
    stroke,
    d,
    style: { transform, ...restStyle } = {},
    ...rest
  }: PopoverArrowProps,
  ref: React.Ref<SVGSVGElement>,
): JSX.Element | null {
  const clipPathId = React.useId();

  if (!floating) {
    return null;
  }

  strokeWidth *= 2;
  const halfStrokeWidth = strokeWidth / 2;

  const svgX = (width / 2) * (tipRadius / -8 + 1);
  const svgY = ((height / 2) * tipRadius) / 4;

  const [side, alignment] = placement.split('-') as [Side, Alignment];
  const isRTL = platform.isRTL(floating);
  const isCustomShape = !!d;
  const isVerticalSide = side === 'top' || side === 'bottom';

  const yOffsetProp = staticOffset && alignment === 'end' ? 'bottom' : 'top';
  let xOffsetProp = staticOffset && alignment === 'end' ? 'right' : 'left';
  if (staticOffset && isRTL) {
    xOffsetProp = alignment === 'end' ? 'left' : 'right';
  }

  const arrowX = arrow?.x != null ? staticOffset || arrow.x : '';
  const arrowY = arrow?.y != null ? staticOffset || arrow.y : '';

  const clipPath =
    ` H${width}` +
    ` L${width - svgX},${height - svgY}` +
    ` Q${width / 2},${height} ${svgX},${height - svgY}` +
    ' Z';

  const dValue = d || 'M0,0' + clipPath;

  const dValueOverride = d || 'M0,-1' + clipPath;

  const rotation = {
    top: isCustomShape ? 'rotate(180deg)' : '',
    left: isCustomShape ? 'rotate(90deg)' : 'rotate(-90deg)',
    bottom: isCustomShape ? '' : 'rotate(180deg)',
    right: isCustomShape ? 'rotate(-90deg)' : 'rotate(90deg)',
  }[side];

  return (
    <svg
      {...rest}
      aria-hidden
      ref={ref}
      width={isCustomShape ? width : width + strokeWidth}
      height={width}
      viewBox={`0 0 ${width} ${height > width ? height : width}`}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        [xOffsetProp]: arrowX,
        [yOffsetProp]: arrowY,
        [side]: isVerticalSide || isCustomShape ? '100%' : `calc(100% - ${strokeWidth / 2}px)`,
        transform: `${rotation}${transform ?? ''}`,
        ...restStyle,
      }}>
      {strokeWidth > 0 && (
        <path
          clipPath={`url(#${clipPathId})`}
          fill="none"
          stroke={stroke}
          // Account for the stroke on the fill path rendered below.
          strokeWidth={strokeWidth + (d ? 0 : 1)}
          d={dValue}
        />
      )}
      {/* In Firefox, for left/right placements there's a ~0.5px gap where the
      border can show through. Adding a stroke on the fill removes it. */}
      <path stroke={strokeWidth && !d ? rest.fill : 'none'} d={dValueOverride} />
      {/* Assumes the border-width of the floating element matches the 
      stroke. */}
      <clipPath id={clipPathId}>
        <rect
          x={-halfStrokeWidth}
          y={halfStrokeWidth * (isCustomShape ? -1 : 1)}
          width={width + strokeWidth}
          height={width}
        />
      </clipPath>
    </svg>
  );
});
