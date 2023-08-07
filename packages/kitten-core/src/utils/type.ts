import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import type {
  RecipeVariantFn,
  RecipeVariantRecord,
} from '@kitten-ui/styles/types/recipe';
import type { ElementType } from 'react';

export type KittenProps<
  C extends ElementType,
  T extends RecipeVariantFn<RecipeVariantRecord>,
> = HTMLStyledProps<C> & RecipeVariantProps<T>;
