import { cx, DefaultProps, KittenColor, KittenSize, rem } from 'kitten-styles';
import React, { FC } from 'react';
import { Box } from '../Box';
import { Bars } from './loaders/Bars';
import { Dots } from './loaders/Dots';
import { Oval } from './loaders/Oval';

const LOADERS = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
};

const sizes: Record<KittenSize, string> = {
  xs: rem(18),
  sm: rem(22),
  md: rem(36),
  lg: rem(44),
  xl: rem(58),
};

export interface LoaderProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'svg'>, 'display' | 'opacity'> {
  size?: KittenSize;

  color?: KittenColor;

  darkColor?: KittenColor;

  variant?: 'bars' | 'oval' | 'dots';
}

export const Loader: FC<LoaderProps> = (props: LoaderProps) => {
  const { size, color, darkColor, variant, className, ...others } = props;

  return (
    <Box
      {...others}
      role="presentation"
      as={LOADERS[variant!] || LOADERS.bars}
      size={sizes[size!] || size || sizes['md']}
      className={cx(
        className,
        variant === 'oval'
          ? `stroke-${color} dark:stroke-${darkColor || color}`
          : `fill-${color} dark:fill-${darkColor || color} `,
      )}
    />
  );
};

Loader.displayName = 'Loader';
Loader.defaultProps = {
  size: 'md',
  variant: 'oval',
};
