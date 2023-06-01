import type { DefaultProps } from 'kitten-styles';
import { createPolymorphicComponent } from '@kitten/utils';
import React from 'react';

export interface BoxProps extends DefaultProps {}

export const Box = createPolymorphicComponent<'div', BoxProps>((props, ref) => {
  const { className, as: Element = 'div', ...others } = props;

  return <Element ref={ref} className={className} {...others} />;
});

Box.displayName = 'Box';
