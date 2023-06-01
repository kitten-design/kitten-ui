import type { DefaultProps } from 'kitten-styles';
import { createPolymorphicComponent } from '@kitten-ui/utils';
import React from 'react';
import { Box } from '../Box';
import { use$Styles } from './$.style';

export interface $Props extends DefaultProps {}

export const $ = createPolymorphicComponent<'div', $Props>((props, ref) => {
  const { className, children, ...others } = props;

  const classes = use$Styles(props);

  return (
    <Box ref={ref} className={classes.root} {...others}>
      {children}
    </Box>
  );
});

$.displayName = '$';
$.defaultProps = {};
