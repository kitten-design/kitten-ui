import { cx } from '@kitten-ui/styles/css';
import { styled } from '@kitten-ui/styles/jsx';
import { cpc } from '@kitten-ui/utils';
import type { ReactNode } from 'react';
import React from 'react';

import type { DividerVariantsProps } from './Divider.style';
import { divider } from './Divider.style';

export type DividerProps = Omit<DividerVariantsProps, 'withLabel'> & {
  label?: ReactNode;
  labelPosition?: 'left' | 'center' | 'right';
};

export const Divider = cpc<'p', DividerProps>((props, ref) => {
  const { className, label, size, vertical, labelPosition, ...others } = props;

  const withLabel = !vertical && !!label;
  const classes = divider({
    size,
    vertical: !!vertical,
    withLabel,
  });

  return (
    <styled.p
      data-divider-root
      data-with-label={!!label}
      ref={ref}
      className={cx(classes.root, className)}
      {...others}
      role="separator">
      {withLabel && (
        <styled.span
          data-divider-label
          data-label-position={labelPosition}
          className={classes.label}>
          {label}
        </styled.span>
      )}
    </styled.p>
  );
});
Divider.displayName = 'Divider';
Divider.defaultProps = {
  borderStyle: 'solid',
  borderColor: 'Common.borderColor',
  labelPosition: 'center',
};
