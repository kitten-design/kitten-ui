import React from 'react';

import { cpc } from '../../utils';
import { Loader } from '../Loader';
import type {
  ActionIconRootProps,
  ActionIconRootVariants,
} from './ActionIcon.style';
import { ActionIconRoot } from './ActionIcon.style';
import { ActionIconGroup } from './ActionIconGroup/ActionIconGroup';

export interface Props extends ActionIconRootProps {
  loading?: boolean;
}

export type ActionIconProps = Props & ActionIconRootVariants;

export const ActionIcon = cpc<
  'button',
  ActionIconProps,
  { Group: typeof ActionIconGroup }
>((props, ref) => {
  const { children, loading, disabled, variant, colorPalette, ...others } =
    props;

  return (
    <ActionIconRoot
      data-action-icon
      ref={ref}
      colorPalette={colorPalette}
      variant={variant}
      data-loading={!!loading}
      disabled={disabled || loading}
      {...others}>
      {loading
        ? (() => {
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
        : children}
    </ActionIconRoot>
  );
});

ActionIcon.displayName = 'ActionIcon';
ActionIcon.defaultProps = {
  variant: 'filled',
};
ActionIcon.Group = ActionIconGroup;