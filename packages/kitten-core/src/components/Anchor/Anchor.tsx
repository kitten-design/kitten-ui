import { cpc } from '@kitten-ui/utils';
import React from 'react';

import type { AnchorRootProps, AnchorRootVariants } from './Anchor.style';
import { AnchorRoot } from './Anchor.style';

export interface Props extends AnchorRootProps {}

export type AnchorProps = Props & AnchorRootVariants;

export const Anchor = cpc<'a', AnchorProps>((props, ref) => {
  return <AnchorRoot data-anchor ref={ref} {...props} />;
});
Anchor.displayName = 'Anchor';
