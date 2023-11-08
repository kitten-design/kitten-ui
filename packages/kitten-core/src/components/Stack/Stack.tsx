import type { StackProps as _StackProps } from '@kitten-ui/styles/jsx';
import { Stack as _Stack } from '@kitten-ui/styles/jsx';
import { cpc } from '@kitten-ui/utils';
import React from 'react';

export interface StackProps extends _StackProps {
  grow?: boolean;
}

export const Stack = cpc<'div', StackProps>((props, ref) => {
  const { grow, css, ...others } = props;

  return (
    <_Stack ref={ref} css={{ '& > *': { flexGrow: grow ? 1 : 'unset' }, ...css }} {...others} />
  );
});

_Stack.displayName = 'StackRoot';
Stack.displayName = 'Stack';
