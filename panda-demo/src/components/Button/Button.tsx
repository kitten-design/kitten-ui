import { cx } from '@kitten-ui/styles/css';
import { type HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { cpc, type PCP } from '@kitten-ui/utils';
import React from 'react';
import { ButtonRoot } from './Button.style';

type Props = HTMLStyledProps<typeof ButtonRoot> & {};

export type ButtonProps = PCP<'button', Props>;

export const Button = cpc<'button', Props>((props, ref) => {
  const { className, as = 'button', children, ...others } = props;

  return (
    <ButtonRoot ref={ref} as={as} className={cx(className)} {...others}>
      {children}
    </ButtonRoot>
  );
});

Button.displayName = 'Button';
