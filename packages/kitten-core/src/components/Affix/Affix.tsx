import React from 'react';

import { cpc } from '../../utils';
import type { PortalProps } from '../Portal';
import { OptionalPortal } from '../Portal';
import type { AffixRootProps, AffixRootVariants } from './Affix.style';
import { AffixRoot } from './Affix.style';

export interface Props extends AffixRootProps {
  target?: HTMLDivElement;
  withinPortal?: boolean;
  portalProps?: Omit<PortalProps, 'children' | 'withinPortal' | 'target'>;
}

export type AffixProps = Props & AffixRootVariants;

export const Affix = cpc<'div', AffixProps>((props, ref) => {
  const { portalProps, withinPortal, target, ...others } = props;

  return (
    <OptionalPortal
      {...portalProps}
      withinPortal={withinPortal}
      target={target}>
      <AffixRoot data-affix ref={ref} {...others} />
    </OptionalPortal>
  );
});
Affix.displayName = 'Affix';
Affix.defaultProps = {
  withinPortal: true,
};
