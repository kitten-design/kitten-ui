import { cpc } from '@kitten-ui/utils';
import React from 'react';

import { Loader } from '../Loader';
import type {
  CloseButtonRootProps,
  CloseButtonRootVariants,
} from './CloseButton.style';
import { CloseButtonRoot } from './CloseButton.style';
import { CloseIcon } from './CloseIcon';

export interface Props extends CloseButtonRootProps {
  loading?: boolean;
}

export type CloseButtonProps = Props & CloseButtonRootVariants;

export const CloseButton = cpc<'button', CloseButtonProps>((props, ref) => {
  const { loading, disabled, variant, colorPalette, ...others } = props;

  return (
    <CloseButtonRoot
      data-action-icon
      ref={ref}
      colorPalette={colorPalette}
      variant={variant}
      data-loading={!!loading}
      disabled={disabled || loading}
      {...others}>
      {loading ? (
        (() => {
          return (
            <React.Fragment>
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
            </React.Fragment>
          );
        })()
      ) : (
        <CloseIcon />
      )}
    </CloseButtonRoot>
  );
});

CloseButton.displayName = 'CloseButton';
CloseButton.defaultProps = {
  variant: 'subtle',
  colorPalette: 'gray',
};
