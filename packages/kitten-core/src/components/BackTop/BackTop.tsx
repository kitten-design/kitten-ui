import { useWindowScroll } from '@kitten-ui/hooks';
import React from 'react';

import { Affix } from '../Affix';
import { Button } from '../Button';
import { Transition } from '../Transition';

export interface BackTopProps {
  children?: React.ReactNode;
}

export const BackTop: React.FC<BackTopProps> = (props) => {
  const { children } = props;
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix bottom="1.25rem" right="1.25rem">
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
