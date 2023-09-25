import {
  arrow,
  flip,
  hide,
  inline,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useDidUpdate, useId } from '@kitten-ui/hooks';
import { useCallback, useState } from 'react';

import { useFloatingAutoUpdate } from '../Tooltip/use-floating-auto-update';
import type { KittenPosition, PopoverEvents } from './Popover';

type UsePopover = {
  position: KittenPosition;
  closeDelay?: number;
  openDelay?: number;
  onPositionChange?(position: KittenPosition): void;
  opened?: boolean;
  offset: number;
  arrowRef: React.RefObject<SVGSVGElement>;
  arrowOffset: number;
  events: PopoverEvents;
  positionDependencies: any[];
  inline: boolean;
};

export function usePopover(settings: UsePopover) {
  const [uncontrolledOpened, setUncontrolledOpened] = useState(false);

  const opened = settings.opened ?? uncontrolledOpened;

  const uid = useId();

  const onChange = useCallback(
    (_opened: boolean) => {
      setUncontrolledOpened(_opened);
    },
    [uid],
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
      enabled: !!settings.events.hover,
      handleClose: safePolygon({ buffer: 1 }),
      delay: { open: settings.openDelay, close: settings.closeDelay },
      mouseOnly: !settings.events.touch,
    }),
    useClick(context, {
      enabled: !!settings.events.click,
      event: 'click',
      toggle: true,
      ignoreMouse: !!settings.events.hover,
    }),
    useFocus(context, { enabled: settings.events.focus, keyboardOnly: true }),
    useRole(context, { role: 'dialog' }),
    useDismiss(context, { enabled: typeof settings.opened === 'undefined' }),
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

  return {
    x,
    y,
    arrowX,
    arrowY,
    reference: refs.setReference,
    floating: refs.setFloating,
    getFloatingProps,
    getReferenceProps,
    opened,
    placement,
    context,
    referenceHidden,
  };
}
