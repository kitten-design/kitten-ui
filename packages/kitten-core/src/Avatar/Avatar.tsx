import { useImage } from 'kitten-hooks';
import type {
  DefaultProps,
  KittenColor,
  KittenGradient,
  KittenRadius,
  KittenSize,
  KittenVariant,
} from 'kitten-styles';
import { createPolymorphicComponent, getFirstChar } from 'kitten-utils';
import React from 'react';
import { Box } from '../Box';
import { useAvatarStyles } from './Avatar.style';
import { AvatarGroup } from './AvatarGroup/AvatarGroup';
import { AvatarIcon } from './AvatarIcon';

export interface AvatarProps extends DefaultProps {
  src?: string | null;
  alt?: string;
  size?: KittenSize;
  radius?: KittenRadius;
  color?: KittenColor;
  variant?: KittenVariant<'filled' | 'light' | 'gradient' | 'outline'>;
  gradient?: KittenGradient;
  imageProps?: React.ComponentProps<'img'>;
  children?: string;
  count?: number;
}

export const Avatar = createPolymorphicComponent<
  'div',
  AvatarProps,
  { Group: typeof AvatarGroup }
>((props, ref) => {
  const { className, src, children, alt, imageProps, count, ...others } = props;

  const { error } = useImage(src);
  
  const classes = useAvatarStyles(props);

  return (
    <Box ref={ref} className={classes.root} {...others}>
      {error ? (
        <div className={classes.placeholder} title={alt}>
          {(count && `${count}`) || getFirstChar(children) || (
            <AvatarIcon className={classes.icon} />
          )}
        </div>
      ) : (
        <img {...imageProps} className={classes.image} src={src!} alt={alt} />
      )}
    </Box>
  );
});

Avatar.Group = AvatarGroup;
Avatar.displayName = 'Avatar';
Avatar.defaultProps = {
  size: 'md',
  color: 'gray',
  radius: 'sm',
  variant: 'light',
};
