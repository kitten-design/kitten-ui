import { cx } from '@kitten-ui/styles/css';
import { type HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { cpc, type PCP } from '@kitten-ui/utils';
import React from 'react';
import { Box } from '../Box';
import { buttonStyle, type ButtonVariants } from './Button.style';

type Props = HTMLStyledProps<'button'> & ButtonVariants & {};

export type ButtonProps = PCP<'button', Props>;

export const Button = cpc<'button', Props>((props, ref) => {
  const {
    className,
    as = 'button',
    children,
    size,
    compact,
    variant,
    radius,
    ...others
  } = props;

  return (
    <Box
      ref={ref}
      as={as}
      className={cx(buttonStyle({ size, compact, variant, radius }), className)}
      {...others}>
      {children}
    </Box>
  );
});

Button.displayName = 'Button';
