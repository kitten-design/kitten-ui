import { cx } from '@kitten-ui/styles/css';
import { type HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { cpc, type PCP } from '@kitten-ui/utils';
import React from 'react';
import { ButtonRoot } from './Button.style';

type Props = HTMLStyledProps<typeof ButtonRoot> & {};

export type ButtonProps = PCP<'button', Props>;

export const Button = cpc<'button', Props>((props, ref) => {
  const { children, ...others } = props;

  return (
    <ButtonRoot ref={ref} {...others}>
      {children}
    </ButtonRoot>
  );
});

Button.displayName = 'Button';
