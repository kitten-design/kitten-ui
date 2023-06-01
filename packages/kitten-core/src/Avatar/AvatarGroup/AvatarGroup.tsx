import type { DefaultProps, KittenSize } from 'kitten-styles';
import { createPolymorphicComponent, getChildrenByType } from '@kitten/utils';
import React, { cloneElement } from 'react';
import { Box } from '../../Box';
import { Avatar } from '../Avatar';
import { AvatarGroupProvider } from './AvatarGroup.context';
import { useAvatarGroupStyles } from './AvatarGroup.style';

export interface AvatarGroupProps extends DefaultProps {
  limit?: number;
  variant?: string;
  spacing?: KittenSize;
}

export const AvatarGroup = createPolymorphicComponent<'div', AvatarGroupProps>(
  (props, ref) => {
    const { className, children, spacing, ...others } = props;

    const classes = useAvatarGroupStyles(props);

    let limit = props.limit || 6;
    if (limit < 0) limit = 0;

    const avatars = getChildrenByType(children, Avatar);
    const more = avatars.length - limit;

    return (
      <AvatarGroupProvider spacing={spacing!}>
        <Box ref={ref} className={classes.root} {...others}>
          {avatars?.slice(0, limit)}
          {more > 0 && cloneElement(avatars[0], { src: '', count: more })}
        </Box>
      </AvatarGroupProvider>
    );
  },
);

AvatarGroup.displayName = 'AvatarGroup';
AvatarGroup.defaultProps = {
  spacing: 'sm',
};
