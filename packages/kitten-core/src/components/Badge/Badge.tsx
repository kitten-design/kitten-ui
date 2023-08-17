import { cx } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';
import type { Properties } from '@kitten-ui/styles/types/csstype';
import React from 'react';

import { cpc } from '../../utils';
import { badge, type BadgeVariants } from './Badge.style';

type Props = BadgeVariants & HTMLStyledProps<'div'>;

export type BadgeProps = Props & {
  disabled?: boolean;
  label?: React.ReactNode;
  size?: Properties['width'];
  offset?: Properties['width'];
};

export const Badge = cpc<'div', BadgeProps>((props, ref) => {
  const { disabled, label, className, size, offset, children, ...others } =
    props;

  const classes = badge(others);

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
