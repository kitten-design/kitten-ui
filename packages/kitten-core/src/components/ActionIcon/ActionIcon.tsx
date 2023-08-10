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
  const {
    children,
    loading,
    variant = 'filled',
    colorPalette,
    ...others
  } = props;

  return (
    <ActionIconRoot
      data-action-icon
      ref={ref}
      colorPalette={colorPalette}
      variant={variant}
      {...others}>
      {loading
        ? (() => {
            return (
              <>
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
              </>
            );
          })()
        : children}
    </ActionIconRoot>
  );
});
ActionIcon.displayName = 'ActionIcon';
ActionIcon.Group = ActionIconGroup;
