import {
  arrow,
  flip,
  hide,
  inline,
  offset,
  safePolygon,
  shift,
  useDelayGroup,
  useDelayGroupContext,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useDidUpdate, useId } from '@kitten-ui/hooks';
import { useCallback, useState } from 'react';

import type { KittenPosition } from './Tooltip';
import { useTooltipGroupContext } from './TooltipGroup/TooltipGroup.context';
import { useFloatingAutoUpdate } from './use-floating-auto-update';

type UseTooltip = {
  position: KittenPosition;
  closeDelay?: number;
  openDelay?: number;
  onPositionChange?(position: KittenPosition): void;
  opened?: boolean;
  offset: number;
  arrowRef: React.RefObject<SVGSVGElement>;
  arrowOffset: number;
  events: { hover: boolean; focus: boolean; touch: boolean };
  positionDependencies: any[];
  inline: boolean;
};

export function useTooltip(settings: UseTooltip) {
  const [uncontrolledOpened, setUncontrolledOpened] = useState(false);

  const opened = settings.opened ?? uncontrolledOpened;
  const withinGroup = useTooltipGroupContext();
  const uid = useId();

  const { delay: groupDelay, currentId, setCurrentId } = useDelayGroupContext();

  const onChange = useCallback(
    (_opened: boolean) => {
      setUncontrolledOpened(_opened);

      if (_opened) {
        setCurrentId(uid);
      }
    },
    [setCurrentId, uid],
  );

  const {
    x,
    y,

    context,
    refs,
    update,
    placement,
    middlewareData: {
      arrow: { x: arrowX, y: arrowY } = {},
      hide: { referenceHidden } = {},
    },
  } = useFloating({
    placement: settings.position,
    open: opened,
    onOpenChange: onChange,
    middleware: [
      offset(settings.offset),
      shift({ padding: 8 }),
      flip({ fallbackAxisSideDirection: 'start' }),
      arrow({ element: settings.arrowRef!, padding: settings.arrowOffset }),
      ...(settings.inline ? [inline()] : []),
      hide(),
    ],
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      enabled: settings.events.hover,
      handleClose: safePolygon({ buffer: 1 }),
      delay: withinGroup
        ? groupDelay
        : { open: settings.openDelay, close: settings.closeDelay },
      mouseOnly: !settings.events.touch,
    }),
    useFocus(context, { enabled: settings.events.focus, keyboardOnly: true }),
    useRole(context, { role: 'tooltip' }),
    useDismiss(context, { enabled: typeof settings.opened === 'undefined' }),
    useDelayGroup(context, { id: uid }),
  ]);

  useFloatingAutoUpdate({
    opened,
    position: settings.position,
    positionDependencies: settings.positionDependencies,
    floating: { refs, update },
  });

  useDidUpdate(() => {
    settings.onPositionChange?.(placement);
  }, [placement]);

  const isGroupPhase = opened && currentId && currentId !== uid;

  return {
    x,
    y,
    arrowX,
    arrowY,
    reference: refs.setReference,
    floating: refs.setFloating,
    getFloatingProps,
    getReferenceProps,
    isGroupPhase,
    opened,
    placement,
    context,
    referenceHidden,
  };
}
