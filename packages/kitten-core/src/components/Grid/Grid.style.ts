import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { cva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';

const GridRootStyles = cva({
  base: { display: 'grid' },
});

export type GridRootVariants = RecipeVariantProps<typeof GridRootStyles>;
export type GridRootProps = HTMLStyledProps<'div'>;
export const GridRoot = styled('div', GridRootStyles);
GridRoot.displayName = 'GridRoot';

// const grid = definePattern({
//   properties: {
//     gap: { type: 'property', value: 'gap' },
//     columnGap: { type: 'property', value: 'gap' },
//     rowGap: { type: 'property', value: 'gap' },
//     columns: { type: 'number' },
//     minChildWidth: { type: 'token', value: 'sizes', property: 'width' },
//   },
//   transform(props, { map }) {
//     const {
//       columnGap,
//       rowGap,
//       gap = columnGap || rowGap ? undefined : '10px',
//       columns,
//       minChildWidth,
//       ...rest
//     } = props;
//     return {
//       display: 'grid',
//       gridTemplateColumns:
//         columns != null
//           ? map(columns, (v) => `repeat(${v}, minmax(0, 1fr))`)
//           : minChildWidth != null
//           ? map(minChildWidth, (v) => `repeat(auto-fit, minmax(${v}, 1fr))`)
//           : undefined,
//       gap,
//       columnGap,
//       rowGap,
//       ...rest,
//     };
//   },
// });
