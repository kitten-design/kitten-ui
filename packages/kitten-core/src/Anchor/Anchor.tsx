import { createPolymorphicComponent } from '@kitten-ui/utils';
import React from 'react';
import { Text, TextProps } from '../Text';
import { useAnchorStyles } from './Anchor.style';

export interface AnchorProps extends TextProps {
  underline?: boolean;
}

export const Anchor = createPolymorphicComponent<'a', AnchorProps>(
  (props, ref) => {
    const { as: Element = 'a', className, ...others } = props;

    const classes = useAnchorStyles(props);

    return <Text as={Element} ref={ref} className={classes.root} {...others} />;
  },
);

Anchor.displayName = 'Anchor';
Anchor.defaultProps = { underline: true, color: 'primary' };
