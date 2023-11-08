import { useImage } from '@kitten-ui/hooks';
import { cpc } from '@kitten-ui/utils';
import React from 'react';

import type { ImageRootProps, ImageRootVariants } from './Image.style';
import { ImageRoot } from './Image.style';
import { ImageIcon } from './ImageIcon';

export interface Props extends ImageRootProps {
  fallbackSrc?: string;
  withPlaceHoler?: boolean;
}

export type ImageProps = Props & ImageRootVariants;

export const Image = cpc<'a', ImageProps>((props, ref) => {
  const { src, fallbackSrc, withPlaceHoler, placeholder, alt, ...others } = props;
  const { loaded, error } = useImage(src);
  if (error) {
    if (fallbackSrc) {
      return <ImageRoot data-image-fallback ref={ref} src={fallbackSrc} alt={alt} {...others} />;
    }
    if (withPlaceHoler) {
      return (
        <ImageRoot data-image-placeholder title={alt} {...others} {...{ as: 'div' }}>
          {placeholder || <ImageIcon width="2.5rem" height="2.5rem" />}
        </ImageRoot>
      );
    }
  }
  if (loaded) {
    return <ImageRoot data-image ref={ref} src={src} alt={alt} {...others} />;
  }
});
Image.displayName = 'Image';
Image.defaultProps = {
  withPlaceHoler: true,
};
