import {
  attachClassName,
  cx,
  getColor,
  KittenSize,
  rem,
} from '@kitten-ui/styles';
import { PolymorphicComponentProps } from '@kitten-ui/utils';
import { DividerProps } from './Divider';

const sizes: Record<KittenSize, string> = {
  xs: rem(1),
  sm: rem(2),
  md: rem(3),
  lg: rem(4),
  xl: rem(5),
};

export function useDividerStyles(
  props: PolymorphicComponentProps<'div', DividerProps>,
) {
  const {
    className,
    vertical,
    labelProps,
    label,
    size,
    color,
    variant,
    labelPosition,
  } = props;

  const horizontal = !vertical;
  const withLabel = !!label && horizontal;
  const _size = sizes[size!] || size;
  const _color = getColor({ color });
  const darkColor = getColor({ color, shade: color === 'dark' ? 50 : 300 });

  const classes = {
    root: cx(
      withLabel && '!border-t-[0]',
      'border-[0]',
      `border-${variant}`,
      horizontal &&
        cx(
          'm-0',
          `border-t-[${_size}] `,
          `border-t-${_color}`,
          `dark:border-t-${darkColor}`,
        ),
      vertical &&
        cx(
          'self-stretch h-auto',
          `border-l-[${_size}] `,
          `border-l-${_color}`,
          `dark:border-t-${darkColor}`,
        ),
      className,
    ),
    label: cx(
      labelPosition === 'left' && '[&::before]:hidden',
      labelPosition === 'right' && '[&::after]:hidden',
      'flex items-center',
      `mt-[${rem(2)}]`,
      `[&::before]:(content-[""] flex-1 border-${variant} border-t-[${_size}] border-t-${_color}  mr-xs)`,
      `[&::after]:(content-[""] flex-1 border-${variant} border-t-[${_size}] border-t-${_color}  ml-xs)`,
      !labelProps?.color && cx(`text-${_color} dark:text-${darkColor}`),
    ),
  };

  return attachClassName('divider', classes);
}
