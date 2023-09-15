import type { RecipeVariantProps } from '@kitten-ui/styles/css';
import { cva } from '@kitten-ui/styles/css';
import type { HTMLStyledProps } from '@kitten-ui/styles/jsx';
import { styled } from '@kitten-ui/styles/jsx';

const GridColRootStyles = cva({
  base: { display: 'GridCol' },
});

export type GridColRootVariants = RecipeVariantProps<typeof GridColRootStyles>;
export type GridColRootProps = HTMLStyledProps<'div'>;
export const GridColRoot = styled('div', GridColRootStyles);
GridColRoot.displayName = 'GridColRoot';

// const gridItem = definePattern({
//   properties: {
//     colSpan: { type: 'number' },
//     rowSpan: { type: 'number' },
//     colStart: { type: 'number' },
//     rowStart: { type: 'number' },
//     colEnd: { type: 'number' },
//     rowEnd: { type: 'number' },
//   },
//   transform(props, { map }) {
//     const { colSpan, rowSpan, colStart, rowStart, colEnd, rowEnd, ...rest } = props
//     const spanFn = (v: string) => (v === 'auto' ? v : `span ${v}`)
//     return {
//       gridColumn: colSpan != null ? map(colSpan, spanFn) : undefined,
//       gridRow: rowSpan != null ? map(rowSpan, spanFn) : undefined,
//       gridColumnStart: colStart,
//       gridColumnEnd: colEnd,
//       gridRowStart: rowStart,
//       gridRowEnd: rowEnd,
//       ...rest,
//     }
//   },
// })
