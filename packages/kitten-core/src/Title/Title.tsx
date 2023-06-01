import type { DefaultProps } from 'kitten-styles';
import { createPolymorphicComponent } from 'kitten-utils';
import React from 'react';
import { Text, TextProps } from '../Text/';
import { useTitleStyles } from './Title.style';

type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;

export interface TitleProps extends Omit<TextProps, 'span'>, DefaultProps {
  order?: TitleOrder;
}

export const Title = createPolymorphicComponent<'h1', TitleProps>(
  (props, ref) => {
    const { className, order, ...others } = props;

    const classes = useTitleStyles(props);

    if (![1, 2, 3, 4, 5, 6].includes(order!)) {
      return null;
    }

    return (
      <Text as={`h${order!}`} ref={ref} className={classes.root} {...others} />
    );
  },
);

Title.displayName = 'Title';
Title.defaultProps = {
  order: 1,
  weight: 'extrabold',
};
