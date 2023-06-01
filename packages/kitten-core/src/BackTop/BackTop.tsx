import { useWindowScroll } from '@kitten-ui/hooks';
import { DefaultProps, rem } from '@kitten-ui/styles';
import { createPolymorphicComponent } from '@kitten-ui/utils';
import React from 'react';
import { Affix } from '../Affix';
import { Button } from '../Button';
import { Transition } from '../Transition';

export interface BackTopProps extends DefaultProps {
  children?: React.ReactNode;
}

export const BackTop: React.FC<BackTopProps> = (props) => {
  const { children } = props;
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: rem(20), right: rem(20) }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
            {children}
          </Button>
        )}
      </Transition>
    </Affix>
  );
};

BackTop.displayName = 'BackTop';
BackTop.defaultProps = {};
