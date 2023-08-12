import React from 'react';

import { cpc } from '../../utils';
import type {
  CloseButtonRootProps,
  CloseButtonRootVariants,
} from './CloseButton.style';
import { CloseButtonRoot } from './CloseButton.style';

export interface Props extends CloseButtonRootProps {}

export type CloseButtonProps = Props & CloseButtonRootVariants;

export const CloseButton = cpc<'div', CloseButtonProps>((props, ref) => {
  return <CloseButtonRoot data-CloseButton ref={ref} {...props} />;
});
CloseButton.displayName = 'CloseButton';
