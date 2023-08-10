import React from 'react';

import { cpc } from '../../utils';
import type { CenterRootProps, CenterRootVariants } from './Center.style';
import { CenterRoot } from './Center.style';

interface Props extends CenterRootProps {}

export type CenterProps = Props & CenterRootVariants;

export const Center = cpc<'div', CenterProps>((props, ref) => {
  return <CenterRoot data-center ref={ref} {...props} />;
});
Center.displayName = 'Center';
