import type { Properties } from '@kitten-ui/style/types/csstype';
import { cpc } from '@kitten-ui/utils';
import type { ReactNode } from 'react';
import React from 'react';

import type { BadgeRootProps, BadgeRootVariants } from './Badge.style';
import { BadgeRoot } from './Badge.style';

interface Props extends BadgeRootProps {
  disabled?: boolean;
  label?: ReactNode;
  size?: Properties['width'];
  offset?: Properties['width'];
}

export type BadgeProps = Props & BadgeRootVariants;

export const Badge = cpc<'div', BadgeProps>((props, ref) => {
  const { disabled, label, size, offset, children, ...others } = props;

  return (
    <BadgeRoot data-badge ref={ref} {...others}>
      {!disabled && (
        <div
          data-badge-label
          data-with-label={!!label || undefined}
          style={{ '--badge-size': size, '--badge-offset': offset }}>
          {label}
        </div>
      )}
      {children}
    </BadgeRoot>
  );
});

Badge.displayName = 'Badge';
