import { HTMLStyledProps, styled } from '@kitten-ui/styles/jsx';
import { PCP, cpc } from '@kitten-ui/utils';
import React from 'react';

interface Props extends HTMLStyledProps<'div'> {}

export type BoxProps = PCP<'div', Props>;

export const Box = cpc<'div', Props>((props, ref) => {
  const { className, as = 'div', ...others } = props;
  const Element = styled(as);
  return <Element ref={ref} className={className} {...others} />;
});

Box.displayName = 'Box';
