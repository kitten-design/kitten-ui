import { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { PolymorphicComponentProps } from '@kitten-ui/utils';
import { ComponentPropsWithoutRef, ElementType } from 'react';

export type KittenProps<C extends ElementType, P = {}> = HTMLStyledProps<C> &
  ComponentPropsWithoutRef<C> &
  P;

export type KittenComponentProps<
  C extends ElementType,
  P = {},
> = PolymorphicComponentProps<C, KittenProps<C, P>>;
