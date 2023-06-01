import { useIsomorphicEffect } from '@kitten-ui/hooks';
import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Box } from '../Box';
import { OptionalPortal } from './OptionalPortal';

export interface PortalProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  target?: HTMLElement | string;
  className?: string;
  innerRef?: React.MutableRefObject<HTMLDivElement>;
}

export function Portal(props: PortalProps) {
  const { target, innerRef, ...others } = props;

  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement>();

  useIsomorphicEffect(() => {
    setMounted(true);

    if (target) {
      ref.current =
        typeof target === 'string'
          ? document.querySelector<HTMLElement>(target)!
          : target;
    }

    if (!ref.current) {
      ref.current = document.createElement('div');
      ref.current.setAttribute('data-portal', '');
      document.body.appendChild(ref.current);
    }

    return () => {
      if (ref.current?.getAttribute('data-portal') === 'true') {
        try {
          document.body.removeChild(ref.current);
          ref.current = undefined;
        } catch {}
      }
    };
  }, [target]);

  if (!mounted) {
    return null;
  }

  return createPortal(<Box ref={innerRef} {...others} />, ref.current!);
}

Portal.displayName = 'Portal';
Portal.OptionalPortal = OptionalPortal;
