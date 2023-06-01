import {
  apply,
  attachClassName,
  cx,
  getVariantClasses,
  KittenSize,
  rem,
} from '@kitten-ui/styles';
import { PolymorphicComponentProps } from '@kitten-ui/utils';
import { TagProps } from './Tag';

const BADGE_VARIANTS = ['light', 'filled', 'outline', 'gradient'];

const sizes: Record<KittenSize, number[]> = {
  xs: [16, 9, 10],
  sm: [18, 10, 12],
  md: [20, 11, 16],
  lg: [26, 13, 20],
  xl: [32, 16, 24],
};

export function useTagStyles(
  props: PolymorphicComponentProps<'div', TagProps>,
) {
  const {
    size = 'md',
    className,
    variant,
    color,
    gradient,
    fullWidth,
    radius,
  } = props;
  const [height, fontSize, paddingX] = size in sizes ? sizes[size] : sizes.md;

  const classes = {
    root: cx(
      `h-[${rem(height)}]`,
      `text-[${rem(fontSize)}]`,
      `rounded-${radius}`,
      `leading-[${rem(height - 2)}]`,
      `${fullWidth ? 'flex w-full' : 'inline-flex w-auto'}`,
      `px-[${rem(paddingX / 1.5)}]`,
      getVariantClasses({
        variant,
        color,
        gradient,
        variants: BADGE_VARIANTS,
        withHover: false,
      }),
      apply(
        'font-sans font-bold no-underline',
        'items-center justify-center cursor-[inherit] truncate',
        'focus-styles align-middle',
      ),
      '[&[hidden]]:hidden',
      className,
    ),
    inner: apply('truncate'),
    left: cx(`mr-[${rem(5)}]`),
    right: cx(`ml-[${rem(5)}]`),
  };

  return attachClassName('tag', classes);
}
