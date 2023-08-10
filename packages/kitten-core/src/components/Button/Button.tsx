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
import {
  ButtonInner,
  ButtonLabel,
  ButtonLoading,
  ButtonRoot,
} from './Button.style';
import { ButtonGroup } from './ButtonGroup/ButtonGroup';

interface Props extends ButtonRootProps {
  loading?: boolean;
  leftSection?: ReactNode;
  rightSection?: ReactNode;

  justify?: ButtonInnerProps['justifyContent'];
}

export type ButtonProps = Props & ButtonRootVariants;

export const Button = cpc<'button', ButtonProps, { Group: typeof ButtonGroup }>(
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
        data-button
        ref={ref}
        data-loading={!!loading}
        data-left={!!left}
        data-right={!!right}
        colorPalette={colorPalette}
        variant={variant}
        disabled={disabled || loading}
        {...others}>
        <ButtonInner data-button-inner justifyContent={justify}>
          {!!left && (
            <Box data-button-leftSection as="span" mr="xs">
              {left}
            </Box>
          )}
          <ButtonLabel>{children}</ButtonLabel>
          {!!right && (
            <Box data-button-rightSection as="span" ml="xs">
              {right}
            </Box>
          )}
          {loading && (
            <ButtonLoading
              data-button-loading
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
Button.defaultProps = {
  variant: 'filled',
};
Button.displayName = 'Button';
Button.Group = ButtonGroup;
