import type { VstackProps } from '@kitten-ui/styles/jsx';
import { VStack as _VStack } from '@kitten-ui/styles/jsx';
import { cpc } from '@kitten-ui/utils';
import React from 'react';

export interface VStackProps extends VstackProps {
  grow?: boolean;
}

export const VStack = cpc<'div', VStackProps>((props, ref) => {
  const { grow, css, ...others } = props;

  return (
    <_VStack ref={ref} css={{ '& > *': { flexGrow: grow ? 1 : 'unset' }, ...css }} {...others} />
  );
});

_VStack.displayName = 'VStackRoot';
VStack.displayName = 'VStack';
