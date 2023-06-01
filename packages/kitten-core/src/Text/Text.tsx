import type {
  DefaultProps,
  KittenAlign,
  KittenColor,
  KittenGradient,
  KittenSize,
  KittenTextDecoration,
  KittenTextTransform,
  KittenVariant,
  KittenWeight,
} from 'kitten-styles';
import { createPolymorphicComponent } from '@kitten-ui/utils';
import React from 'react';
import { Box } from '../Box';
import { useTextStyles } from './Text.style';

export interface TextProps extends DefaultProps {
  size?: KittenSize;
  color?: KittenColor;
  weight?: KittenWeight;
  transform?: KittenTextTransform;
  align?: KittenAlign;
  variant?: KittenVariant<'text' | 'gradient'>;
  lineClamp?: number;
  truncate?: boolean;
  inline?: boolean;
  textDecoration?: KittenTextDecoration;
  italic?: boolean;
  inherit?: boolean;
  gradient?: KittenGradient;
  span?: boolean;
}

export const Text = createPolymorphicComponent<'div', TextProps>(
  (props, ref) => {
    const {
      as = props.span ? 'span' : 'div',
      lineClamp,
      truncate,
      inherit,
      color,
      inline,
      size,
      textDecoration,
      weight,
      transform,
      align,
      italic,
      variant,
      gradient,
      className,
      ...others
    } = props;

    const classes = useTextStyles(props);

    return <Box as={as} ref={ref} className={classes.root} {...others} />;
  },
);

Text.displayName = 'Text';
Text.defaultProps = { variant: 'text', color: 'dark' };
