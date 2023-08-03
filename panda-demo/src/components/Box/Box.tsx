import { HTMLStyledProps, styled } from '@kitten-ui/styles/jsx';
import {
  PolymorphicComponentProps,
  createPolymorphicComponent,
} from '@kitten-ui/utils';
import React from 'react';

type Props = HTMLStyledProps<'div'>;

export type BoxProps = PolymorphicComponentProps<'div', Props>;

export const Box = createPolymorphicComponent<'div', Props>((props, ref) => {
  const { className, as = 'div', ...others } = props;
  const Element = styled(as);
  return <Element ref={ref} className={className} {...others} />;
});

Box.displayName = 'Box';
