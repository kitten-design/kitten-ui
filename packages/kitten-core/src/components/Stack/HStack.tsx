import type { HstackProps } from '@kitten-ui/styles/jsx';
import { HStack as _HStack } from '@kitten-ui/styles/jsx';
import { cpc } from '@kitten-ui/utils';
import React from 'react';

export interface HStackProps extends HstackProps {
  grow?: boolean;
}

export const HStack = cpc<'div', HStackProps>((props, ref) => {
  const { grow, css, ...others } = props;

  return (
    <_HStack ref={ref} css={{ '& > *': { flexGrow: grow ? 1 : 'unset' }, ...css }} {...others} />
  );
});

_HStack.displayName = 'HStackRoot';
HStack.displayName = 'HStack';
