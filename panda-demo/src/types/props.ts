import { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { PolymorphicComponentProps } from '@kitten-ui/utils';
import { ComponentProps, ElementType } from 'react';

export type KittenProps<C extends ElementType> = HTMLStyledProps<C> &
  ComponentProps<C>;

export type KittenComponentProps<C extends ElementType> =
  PolymorphicComponentProps<C, KittenProps<C>>;
