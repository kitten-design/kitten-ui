import { type HTMLStyledProps } from '@kitten-ui/styles/jsx';
import React from 'react';
import { ButtonRoot } from './Button.style';

export type ButtonProps = HTMLStyledProps<typeof ButtonRoot> & {};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, ...others } = props;

    return (
      <ButtonRoot ref={ref} {...others}>
        {children}
      </ButtonRoot>
    );
  },
);

Button.displayName = 'Button';
