import { token } from '@kitten-ui/styles/tokens';
import type { Properties } from '@kitten-ui/styles/types/csstype';
import { cpc, getChildrenByType } from '@kitten-ui/utils';
import React, { cloneElement } from 'react';

import type { AvatarProps } from '../Avatar';
import { Avatar } from '../Avatar';
import type {
  AvatarGroupRootProps,
  AvatarGroupRootVariants,
} from './AvatarGroup.style';
import { AvatarGroupRoot } from './AvatarGroup.style';

export interface Props extends AvatarGroupRootProps {
  limit?: number;
  variant?: AvatarProps['variant'];
  spacing?: Properties['margin'];
}

export type AvatarGroupProps = Props & AvatarGroupRootVariants;

const getSpacing = (spacing?: Properties['margin']) => {
  if (
    spacing &&
    ['xs', 'sm', 'md', 'lg', 'xl', '-xs', '-sm', '-md', '-lg', '-xl'].includes(
      spacing,
    )
  ) {
    return token.var(`spacing.${spacing}` as any);
  }

  return spacing;
};

export const AvatarGroup = cpc<'div', AvatarGroupProps>((props, ref) => {
  const { children, spacing, style, colorPalette, variant, ...others } = props;

  let limit = props.limit || 6;
  if (limit < 0) limit = 0;

  const avatars = getChildrenByType(children, Avatar);
  const more = avatars.length - limit;

  return (
    <AvatarGroupRoot
      ref={ref}
      style={{ ...style, '--ag-spacing': getSpacing(spacing) }}
      {...others}>
      {avatars?.slice(0, limit)}
      {more > 0 &&
        cloneElement(avatars[0], {
          src: '',
          variant,
          colorPalette,
          children: `+${more}`,
        })}
    </AvatarGroupRoot>
  );
});

AvatarGroup.displayName = 'AvatarGroup';
AvatarGroup.defaultProps = {
  spacing: 'sm',
  colorPalette: 'gray',
  variant: 'filled',
};
