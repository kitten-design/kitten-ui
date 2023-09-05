import { cpc } from '@kitten-ui/utils';
import React from 'react';

import type { FlexRootProps, FlexRootVariants } from './Flex.style';
import { FlexRoot } from './Flex.style';

export interface Props extends FlexRootProps {}

export type FlexProps = Props & FlexRootVariants;

export const Flex = cpc<'div', FlexProps>((props, ref) => {
  return <FlexRoot data-Flex ref={ref} {...props} />;
});
Flex.displayName = 'Flex';
