import { crc } from '@kitten-ui/utils';
import React, { ComponentProps } from 'react';

import { ButtonRoot } from './Button.style';

export type ButtonProps = ComponentProps<typeof ButtonRoot>;

export const Button = crc<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, ...others } = props;

  return (
    <ButtonRoot ref={ref} {...others}>
      {children}
    </ButtonRoot>
  );
});

Button.displayName = 'Button';

const a: ButtonProps = {};
