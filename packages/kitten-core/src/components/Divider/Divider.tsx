import { cpc } from '@kitten-ui/utils';
import type { ReactNode } from 'react';
import React from 'react';

import type { DividerRootVariants } from './Divider.style';
import { DividerRoot, type DividerRootProps } from './Divider.style';

interface Props extends Omit<DividerRootProps, 'withLabel'> {
  label?: ReactNode;
}

export type DividerProps = Props & DividerRootVariants;

export const Divider = cpc<'p', DividerProps>((props, ref) => {
  const { label, vertical, ...others } = props;

  const withLabel = !vertical && !!label;

  return (
    <DividerRoot
      data-divider-root
      data-with-label={!!label}
      ref={ref}
      {...others}
      withLabel={withLabel}
      vertical={vertical}
      role="separator">
      {withLabel && <span data-divider-label>{label}</span>}
    </DividerRoot>
  );
});
Divider.displayName = 'Divider';
