import type {
  ComponentProps,
  ComponentPropsWithRef,
  ElementType,
  ForwardRefRenderFunction,
  FunctionComponent,
  ReactElement,
} from 'react';
import { forwardRef } from 'react';

import type { Empty, Merge } from './types';

/** Merge component props */
export type MergeProps<C extends ElementType, P = Empty> = Merge<ComponentProps<C>, P>;

/** Merge component props (with ref) */
export type MergePropsWithRef<C extends ElementType, P = Empty> = Merge<
  ComponentPropsWithRef<C>,
  P
>;

/** Polymorphic component props */
export type PolymorphicComponentProps<C extends ElementType, P = Empty> = MergePropsWithRef<
  C,
  P & { as?: C }
>;

/** Polymorphic component */
export type PolymorphicComponent<C extends ElementType, P = Empty, S = Empty> = (<
  As extends ElementType = C,
>(
  props: PolymorphicComponentProps<As, P>,
) => ReactElement) &
  Omit<FunctionComponent<PolymorphicComponentProps<C, P>>, never> &
  S;

/** Creating a polymorphic component */
export function createPolymorphicComponent<C extends ElementType, P = Empty, S = Empty>(
  render: ForwardRefRenderFunction<any, PolymorphicComponentProps<C, P>>,
) {
  return forwardRef(render) as unknown as PolymorphicComponent<C, P, S>;
}

/** alias for createPolymorphicComponent */
export const cpc = createPolymorphicComponent;
