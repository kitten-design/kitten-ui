import type {
  ComponentProps,
  ComponentPropsWithRef,
  ElementType,
  ForwardRefRenderFunction,
  FunctionComponent,
  ReactElement,
} from 'react';
import { forwardRef } from 'react';

/** 合并属性 */
export type Merge<T, P> = P & Omit<T, keyof P>;

/** 合并元素属性 */
export type MergeProps<C extends ElementType, P = {}> = Merge<
  ComponentProps<C>,
  P
>;

/** 合并元素属性（带有ref） */
export type MergePropsWithRef<C extends ElementType, P = {}> = Merge<
  ComponentPropsWithRef<C>,
  P
>;

/** 多态组件参数 */
export type PolymorphicComponentProps<
  C extends ElementType,
  P = {},
> = MergePropsWithRef<C, P & { as?: C }>;

/** 多态组件 */
export type PolymorphicComponent<C extends ElementType, P = {}, S = {}> = (<
  As extends ElementType = C,
>(
  props: PolymorphicComponentProps<As, P>,
) => ReactElement) &
  Omit<FunctionComponent<PolymorphicComponentProps<C, P>>, never> &
  S;

/** 创建多态组件 */
export function createPolymorphicComponent<
  C extends ElementType,
  P = {},
  S = {},
>(render: ForwardRefRenderFunction<any, PolymorphicComponentProps<C, P>>) {
  return forwardRef(render) as unknown as PolymorphicComponent<C, P, S>;
}
