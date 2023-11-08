import { useImage } from '@kitten-ui/hooks';
import { cpc, getFirstChar } from '@kitten-ui/utils';
import type { ReactNode } from 'react';
import React from 'react';

import type { AvatarRootProps, AvatarRootVariants } from './Avatar.style';
import { AvatarImage, AvatarPlaceholder, AvatarRoot } from './Avatar.style';
import { AvatarGroup } from './AvatarGroup/AvatarGroup';
import { AvatarIcon } from './AvatarIcon';

export interface Props extends AvatarRootProps {
  src?: string | null;
  alt?: string;
  imageProps?: React.ComponentProps<'img'>;
  children?: ReactNode;
  label?: string;
}

export type AvatarProps = Props & AvatarRootVariants;

export const Avatar = cpc<'div', AvatarProps, { Group: typeof AvatarGroup }>((props, ref) => {
  const { src, alt, label, children, imageProps, ...others } = props;

  const { error } = useImage(src);

  return (
    <AvatarRoot data-avatar data-avatar-with-img={!!error} ref={ref} {...others}>
      {error ? (
        <div className={AvatarPlaceholder} title={alt}>
          {getFirstChar(label) || children || <AvatarIcon data-avatar-placeholder-icon />}
        </div>
      ) : (
        <img {...imageProps} className={AvatarImage} src={src!} alt={alt} />
      )}
    </AvatarRoot>
  );
});
Avatar.displayName = 'Avatar';
Avatar.defaultProps = {
  rounded: 'sm',
};
Avatar.Group = AvatarGroup;
