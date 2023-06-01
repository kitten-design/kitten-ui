import { DefaultProps, getZIndex } from 'kitten-styles';
import { createPolymorphicComponent } from 'kitten-utils';
import React from 'react';
import { Box } from '../Box';
import { OptionalPortal, PortalProps } from '../Portal';
import { useAffixStyles } from './Affix.style';

export interface AffixProps extends DefaultProps {
  target?: HTMLDivElement;
  zIndex?: React.CSSProperties['zIndex'];
  withinPortal?: boolean;
  portalProps?: Omit<PortalProps, 'children' | 'withinPortal' | 'target'>;
  position?: {
    top?: string | number;
    left?: string | number;
    bottom?: string | number;
    right?: string | number;
  };
}

export const Affix = createPolymorphicComponent<'div', AffixProps>(
  (props, ref) => {
    const { target, position, zIndex, withinPortal, portalProps, ...others } =
      props;

    const classes = useAffixStyles(props);

    return (
      <OptionalPortal
        {...portalProps}
        withinPortal={withinPortal}
        target={target}>
        <Box className={classes.root} ref={ref} {...others} />
      </OptionalPortal>
    );
  },
);

Affix.displayName = 'Affix';
Affix.defaultProps = {
  position: { bottom: 0, right: 0 },
  zIndex: getZIndex('modal'),
  withinPortal: true,
};
