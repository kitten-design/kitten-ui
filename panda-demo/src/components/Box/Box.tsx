import { styled } from '@kitten-ui/styles/jsx';
import type { PolymorphicComponentProps } from '@kitten-ui/utils';
import { createPolymorphicComponent } from '@kitten-ui/utils';
import React from 'react';
import { KittenProps } from '../../types/props';

export type BoxProps = PolymorphicComponentProps<'div', KittenProps<'div'>>;

export const Box = createPolymorphicComponent<'div', KittenProps<'div'>>(
  (props, ref) => {
    const { as = 'div', ...others } = props;
    const Element = styled(as);
    return <Element ref={ref} {...others} />;
  },
);

Box.displayName = 'Box';
