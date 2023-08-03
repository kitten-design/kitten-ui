import type {
  ComponentProps,
  ComponentPropsWithRef,
  ElementType,
  ForwardRefRenderFunction,
  FunctionComponent,
  ReactElement,
} from 'react';
import { forwardRef } from 'react';

/** Merge properties */
// export type Merge<T, P> = P & Omit<T, keyof P>;
export type Merge<T, P> = P & T;

/** Merge component props */
export type MergeProps<C extends ElementType, P = {}> = Merge<
  ComponentProps<C>,
  P
>;

/** Merge component props (with ref) */
export type MergePropsWithRef<C extends ElementType, P = {}> = Merge<
  ComponentPropsWithRef<C>,
  P
>;

/** Polymorphic component props */
export type PolymorphicComponentProps<
  C extends ElementType,
  P = {},
> = MergePropsWithRef<C, P & { as?: C }>;

/** Polymorphic component */
export type PolymorphicComponent<C extends ElementType, P = {}, S = {}> = (<
  As extends ElementType = C,
>(
  props: PolymorphicComponentProps<As, P>,
) => ReactElement) &
  Omit<FunctionComponent<PolymorphicComponentProps<C, P>>, never> &
  S;

/** Creating a polymorphic component */
export function createPolymorphicComponent<
  C extends ElementType,
  P = {},
  S = {},
>(render: ForwardRefRenderFunction<any, PolymorphicComponentProps<C, P>>) {
  return forwardRef(render) as unknown as PolymorphicComponent<C, P, S>;
}

export type PCP<C extends ElementType, P = {}> = PolymorphicComponentProps<
  C,
  P
>;
export const cpc = createPolymorphicComponent;
