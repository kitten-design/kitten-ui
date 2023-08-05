import { type HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { crc } from '@kitten-ui/utils';
import React from 'react';

import { ButtonRoot } from './Button.style';

export type ButtonProps = HTMLStyledProps<typeof ButtonRoot>;

export const Button = crc<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, ...others } = props;

  return (
    <ButtonRoot ref={ref} {...others}>
      {children}
    </ButtonRoot>
  );
});

Button.displayName = 'Button';
