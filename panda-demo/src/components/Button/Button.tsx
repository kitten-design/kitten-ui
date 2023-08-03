import { cx } from '@kitten-ui/styles/css';
import { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { ButtonVariantProps, button } from '@kitten-ui/styles/recipes';
import { PCP, cpc } from '@kitten-ui/utils';
import React from 'react';
import { Box } from '../Box';

interface Props extends HTMLStyledProps<'button'>, ButtonVariantProps {}

export type ButtonProps = PCP<'button', Props>;

export const Button = cpc<'button', Props>((props, ref) => {
  const { className, as = 'button', children, ...others } = props;

  return (
    <Box ref={ref} as={as} className={cx(button(), className)} {...others}>
      {children}
    </Box>
  );
});

Button.displayName = 'Button';
