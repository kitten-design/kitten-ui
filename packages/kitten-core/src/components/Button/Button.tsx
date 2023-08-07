import type { ReactNode } from 'react';
import React from 'react';

import { cpc } from '../../utils';
import { Box } from '../Box';
import { Loader } from '../Loader';
import type {
  ButtonInnerProps,
  ButtonRootProps,
  ButtonRootVariants,
} from './Button.style';
import { ButtonInner, ButtonLoading, ButtonRoot } from './Button.style';

export interface ButtonProps extends ButtonRootProps {
  loading?: boolean;
  leftSection?: ReactNode;
  rightSection?: ReactNode;

  justify?: ButtonInnerProps['justifyContent'];
}

export const Button = cpc<'button', ButtonProps & ButtonRootVariants>(
  (props, ref) => {
    const {
      children,
      disabled,
      loading,
      leftSection,
      rightSection,
      justify,
      variant,
      colorPalette,
      ...others
    } = props;

    const left = leftSection;
    const right = rightSection;

    return (
      <ButtonRoot
        ref={ref}
        data-loading={!!loading}
        data-left={!!left}
        data-right={!!right}
        colorPalette={colorPalette}
        variant={variant}
        disabled={disabled || loading}
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
              {!['gradient', 'filled', 'default'].includes(variant!) && (
                <Loader colorPalette={colorPalette} />
              )}
              {['gradient', 'filled'].includes(variant!) && (
                <Loader
                  key="loader-2"
                  css={{
                    '--loader-color': 'colors.white',
                  }}
                />
              )}
              {variant === 'default' && (
                <Loader
                  css={{ '--loader-color': 'colors.Button.default.color' }}
                />
              )}
            </ButtonLoading>
          )}
        </ButtonInner>
      </ButtonRoot>
    );
  },
);

Button.displayName = 'Button';
