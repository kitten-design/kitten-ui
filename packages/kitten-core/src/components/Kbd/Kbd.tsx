import { cpc } from '@kitten-ui/utils';
import React from 'react';

import type { KbdRootProps, KbdRootVariants } from './Kbd.style';
import { KbdRoot } from './Kbd.style';

export interface Props extends KbdRootProps {}

export type KbdProps = Props & KbdRootVariants;

export const Kbd = cpc<'kbd', KbdProps>((props, ref) => {
  return <KbdRoot data-kbd ref={ref} {...props} />;
});
Kbd.displayName = 'Kbd';
