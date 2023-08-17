import { cx } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';
import React from 'react';

import { cpc } from '../../utils';
import { badge, type BadgeVariants } from './Badge.style';

type Props = BadgeVariants & HTMLStyledProps<'div'>;

export type BadgeProps = Props & {
  disabled?: boolean;
  label?: React.ReactNode;
};

export const Badge = cpc<'div', BadgeProps>((props, ref) => {
  const { disabled, label, className, children, ...others } = props;

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
          className={classes.label}>
          {label}
        </div>
      )}
      {children}
    </styled.div>
  );
});
Badge.displayName = 'Badge';
