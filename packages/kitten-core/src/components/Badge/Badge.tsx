import { cx } from '@kitten-ui/styles/css';
import { styled } from '@kitten-ui/styles/jsx';
import type { Properties } from '@kitten-ui/styles/types/csstype';
import { cpc } from '@kitten-ui/utils';
import type { ReactNode } from 'react';
import React from 'react';

import type { BadgeVariantsProps } from './Badge.style';
import { badge } from './Badge.style';

export type BadgeProps = BadgeVariantsProps & {
  disabled?: boolean;
  label?: ReactNode;
  size?: Properties['width'];
  offset?: Properties['width'];
};

export const Badge = cpc<'div', BadgeProps>((props, ref) => {
  const {
    disabled,
    label,
    className,
    size,
    offset,
    children,

    inline,
    withBorder,
    position,
    processing,
    ...others
  } = props;

  const classes = badge({ inline, withBorder, position, processing });

  return (
    <styled.div
      data-badge
      ref={ref}
      className={cx(classes.root, className)}
      {...others}>
      {!disabled && (
        <div
          data-badge-label
          data-with-label={!!label}
          className={classes.label}
          style={{ '--badge-size': size, '--badge-offset': offset }}>
          {label}
        </div>
      )}
      {children}
    </styled.div>
  );
});

Badge.displayName = 'Badge';
Badge.defaultProps = {
  rounded: 'full',
  colorPalette: 'red',
  color: 'white',
  fontSize: 'xs',
};
