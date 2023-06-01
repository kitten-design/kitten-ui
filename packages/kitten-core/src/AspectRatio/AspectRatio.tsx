import type { DefaultProps } from 'kitten-styles';
import { createPolymorphicComponent } from 'kitten-utils';
import React from 'react';
import { Box } from '../Box';
import { useAspectRatioStyles } from './AspectRatio.style';

export interface AspectRatioProps extends DefaultProps {
  ratio: number;
}

export const AspectRatio = createPolymorphicComponent<'div', AspectRatioProps>(
  (props, ref) => {
    const { className, children, ...others } = props;

    const classes = useAspectRatioStyles(props);

    return (
      <Box ref={ref} className={classes.root} {...others}>
        {children}
      </Box>
    );
  },
);

AspectRatio.displayName = 'AspectRatio';
AspectRatio.defaultProps = {};
