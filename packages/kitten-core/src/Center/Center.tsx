import type { DefaultProps } from '@kitten-ui/styles';
import { createPolymorphicComponent } from '@kitten-ui/utils';
import React from 'react';
import { Box } from '../Box';
import { useCenterStyles } from './Center.style';

export interface CenterProps extends DefaultProps {
  inline?: boolean;
}

export const Center = createPolymorphicComponent<'div', CenterProps>(
  (props, ref) => {
    const { className, children, ...others } = props;

    const classes = useCenterStyles(props);

    return (
      <Box ref={ref} className={classes.root} {...others}>
        {children}
      </Box>
    );
  },
);

Center.displayName = 'Center';
Center.defaultProps = {};