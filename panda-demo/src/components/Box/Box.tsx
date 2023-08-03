import { HTMLStyledProps, styled } from '@kitten-ui/styles/jsx';
import {
  PolymorphicComponentProps,
  createPolymorphicComponent,
} from '@kitten-ui/utils';
import React from 'react';

type _BoxProps = HTMLStyledProps<'div'>;

export type BoxProps = PolymorphicComponentProps<'div', _BoxProps>;

export const Box = createPolymorphicComponent<'div', _BoxProps>(
  (props, ref) => {
    const { className, as = 'div', ...others } = props;
    const Element = styled(as);
    return <Element ref={ref} className={className} {...others} />;
  },
);

Box.displayName = 'Box';
