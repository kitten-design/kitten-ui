import { DefaultProps } from 'kitten-styles';
import {
  createPolymorphicComponent,
  getChildrenByType,
} from '@kitten-ui/utils';
import React from 'react';
import { Box } from '../../Box';
import { Button } from '../Button';
import { useButtonGroupStyles } from './ButtonGroup.style';

export interface ButtonGroupProps extends DefaultProps {
  vertical?: Boolean;
  buttonBorderWidth?: number;
}

export const ButtonGroup = createPolymorphicComponent<'div', ButtonGroupProps>(
  (props, ref) => {
    const { className, children, ...others } = props;

    const classes = useButtonGroupStyles(props);

    const buttons = getChildrenByType(children, Button);

    return (
      <Box className={classes.root} ref={ref} {...others}>
        {buttons}
      </Box>
    );
  },
);

ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.defaultProps = {
  buttonBorderWidth: 1,
};
