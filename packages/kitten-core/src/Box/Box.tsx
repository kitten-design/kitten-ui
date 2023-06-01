import type { DefaultProps } from '@kitten-ui/styles';
import { createPolymorphicComponent } from '@kitten-ui/utils';
import React from 'react';

export interface BoxProps extends DefaultProps {}

export const Box = createPolymorphicComponent<'div', BoxProps>((props, ref) => {
  const { className, as: Element = 'div', ...others } = props;

  return <Element ref={ref} className={className} {...others} />;
});

Box.displayName = 'Box';
