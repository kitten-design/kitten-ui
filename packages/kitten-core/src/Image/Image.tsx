import { useImage } from 'kitten-hooks';
import { DefaultProps, KittenFit, KittenRadius, rem } from 'kitten-styles';
import { createPolymorphicComponent } from '@kitten-ui/utils';
import React from 'react';
import { Box } from '../Box';
import { Text } from '../Text/Text';
import { useImageStyles } from './Image.style';
import { ImageIcon } from './ImageIcon';

export interface ImageProps extends DefaultProps {
  src?: string | null;
  alt?: string;
  fit?: KittenFit;
  radius?: KittenRadius;
  width?: number | string;
  height?: number | string;
  withPlaceholder?: boolean;
  placeholder?: React.ReactNode;
  imageRef?: React.ForwardedRef<HTMLImageElement>;
  imageProps?: React.ComponentPropsWithoutRef<'img'>;
  caption?: React.ReactNode;
}

export const Image = createPolymorphicComponent<'div', ImageProps>(
  (props, ref) => {
    const {
      className,
      children,
      caption,
      src,
      alt,
      fit,
      height,
      width,
      imageRef,
      imageProps,
      withPlaceholder,
      placeholder,
      ...others
    } = props;

    const { loaded, error } = useImage(src);

    const classes = useImageStyles(props);

    return (
      <Box
        ref={ref}
        className={classes.root}
        style={{ width: rem(width) }}
        {...others}>
        <figure className={classes.figure}>
          <div
            className={classes.imageWrapper}
            style={{
              width: rem(width),
              height: rem((height !== 'auto' && height) || (error && 100)),
            }}>
            {loaded && (
              <img
                className={classes.image}
                src={src!}
                alt={alt}
                ref={imageRef}
                {...imageProps}
              />
            )}

            {withPlaceholder && error && (
              <div className={classes.placeholder} title={alt}>
                {placeholder || (
                  <div>
                    <ImageIcon width={rem(40)} height={rem(40)} />
                  </div>
                )}
              </div>
            )}
          </div>

          {!!caption && (
            <Text
              as="figcaption"
              size="sm"
              align="center"
              className={classes.caption}>
              {caption}
            </Text>
          )}
        </figure>
      </Box>
    );
  },
);

Image.displayName = 'Image';
Image.defaultProps = {
  fit: 'cover',
  width: 'full',
  height: 'auto',
  radius: 'none',
};
