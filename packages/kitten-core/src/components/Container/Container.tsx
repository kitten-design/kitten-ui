import type { ContainerProps as _ContainerProps } from '@kitten-ui/styles/jsx';
import { Container as _Container } from '@kitten-ui/styles/jsx';
import { cpc } from '@kitten-ui/utils';
import React from 'react';

export interface ContainerProps extends _ContainerProps {
  grow?: boolean;
}

export const Container = cpc<'div', ContainerProps>((props, ref) => {
  const { paddingX, ...others } = props;

  return (
    <_Container
      ref={ref}
      paddingX={paddingX || { base: 'sm', md: 'md', lg: 'lg' }}
      {...others}
    />
  );
});

_Container.displayName = 'ContainerRoot';
Container.displayName = 'Container';
