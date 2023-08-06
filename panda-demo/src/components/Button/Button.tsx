import { crc } from '@kitten-ui/utils';
import type { ReactNode } from 'react';
import React from 'react';

import { Box } from '../Box';
import type { ButtonInnerProps, ButtonRootProps } from './Button.style';
import { ButtonInner, ButtonLoading, ButtonRoot } from './Button.style';

export type ButtonProps = ButtonRootProps & {
  loading?: boolean;
  leftSection?: ReactNode;
  rightSection?: ReactNode;

  justify?: ButtonInnerProps['justifyContent'];
};

export const Button = crc<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, loading, leftSection, rightSection, justify, ...others } =
    props;

  const left = leftSection;
  const right = rightSection;

  return (
    <ButtonRoot
      ref={ref}
      data-loading={!!loading}
      data-left={!!left}
      data-right={!!right}
      pointerEvents={loading ? 'none' : 'auto'}
      {...others}>
      <ButtonInner justifyContent={justify}>
        {!!left && (
          <Box as="span" mr="xs">
            {left}
          </Box>
        )}
        {children}
        {!!right && (
          <Box as="span" ml="xs">
            {right}
          </Box>
        )}
        {loading && (
          <ButtonLoading
            rounded={props?.rounded}
            borderRadius={props?.borderRadius}>
            ⭕️
          </ButtonLoading>
        )}
      </ButtonInner>
    </ButtonRoot>
  );
});

Button.displayName = 'Button';
