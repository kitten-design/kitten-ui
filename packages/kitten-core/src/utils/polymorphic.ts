import type {
  ComponentProps,
  ComponentPropsWithRef,
  ElementType,
  ForwardRefRenderFunction,
  FunctionComponent,
  ReactElement,
} from 'react';
import { forwardRef } from 'react';

type Empty = Record<string, any>;

export type Merge<T, P> = P & Omit<T, keyof P>;

export type MergeProps<C extends ElementType, P = Empty> = Merge<
  ComponentProps<C>,
  P
>;

export type MergePropsWithRef<C extends ElementType, P = Empty> = Merge<
  ComponentPropsWithRef<C>,
  P
>;

export type PCP<C extends ElementType, P = Empty> = MergePropsWithRef<
  C,
  P & { as?: C }
>;

export type PC<C extends ElementType, P = Empty, S = Empty> = (<
  As extends ElementType = C,
>(
  props: PCP<As, P>,
) => ReactElement) &
  Omit<FunctionComponent<PCP<C, P>>, never> &
  S;

export const cpc = <C extends ElementType, P = Empty, S = Empty>(
  render: ForwardRefRenderFunction<any, PCP<C, P>>,
) => {
  return forwardRef(render) as unknown as PC<C, P, S>;
};
