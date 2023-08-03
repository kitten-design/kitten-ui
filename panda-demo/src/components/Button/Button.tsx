import { cx } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { ButtonVariantProps, button } from '@kitten-ui/styles/recipes';
import type { PolymorphicComponentProps } from '@kitten-ui/utils';
import { createPolymorphicComponent } from '@kitten-ui/utils';
import React from 'react';
import { Box } from '../Box';

type _ButtonProps = HTMLStyledProps<'button'> & ButtonVariantProps;

export type ButtonProps = PolymorphicComponentProps<'button', _ButtonProps>;

export const Button = createPolymorphicComponent<'button', _ButtonProps>(
  (props, ref) => {
    const { className, as = 'button', children, ...others } = props;

    return (
      <Box ref={ref} as={as} className={cx(button(), className)} {...others}>
        {children}
      </Box>
    );
  },
);

Button.displayName = 'Button';
