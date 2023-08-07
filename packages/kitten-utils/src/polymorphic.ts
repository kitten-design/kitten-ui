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
export type Merge<T, P> = P & Omit<T, keyof P>;

/** Merge component props */
export type MergeProps<C extends ElementType, P = Record<string, any>> = Merge<
  ComponentProps<C>,
  P
>;

/** Merge component props (with ref) */
export type MergePropsWithRef<
  C extends ElementType,
  P = Record<string, any>,
> = Merge<ComponentPropsWithRef<C>, P>;

/** Polymorphic component props */
export type PolymorphicComponentProps<
  C extends ElementType,
  P = Record<string, any>,
> = MergePropsWithRef<C, P & { as?: C }>;

/** Polymorphic component */
export type PolymorphicComponent<
  C extends ElementType,
  P = Record<string, any>,
  S = Record<string, any>,
> = (<As extends ElementType = C>(
  props: PolymorphicComponentProps<As, P>,
) => ReactElement) &
  Omit<FunctionComponent<PolymorphicComponentProps<C, P>>, never> &
  S;

/** Creating a polymorphic component */
export function createPolymorphicComponent<
  C extends ElementType,
  P = Record<string, any>,
  S = Record<string, any>,
>(render: ForwardRefRenderFunction<any, PolymorphicComponentProps<C, P>>) {
  return forwardRef(render) as unknown as PolymorphicComponent<C, P, S>;
}
