import {
  apply,
  attachClassName,
  cx,
  getColor,
  getVariant,
  GetVariantInput,
  KittenSize,
  rem,
} from 'kitten-styles';
import { PolymorphicComponentProps } from 'kitten-utils';
import { AvatarProps } from './Avatar';
import { useAvatarGroupContext } from './AvatarGroup/AvatarGroup.context';

const AVATAR_VARIANTS = ['filled', 'light', 'gradient', 'outline'];

const sizes: Record<KittenSize, number> = {
  xs: 16,
  sm: 26,
  md: 38,
  lg: 56,
  xl: 84,
};

export function useAvatarStyles(
  props: PolymorphicComponentProps<'div', AvatarProps>,
) {
  const { className, variant, color, gradient, radius, size = 'md' } = props;

  const _size = size in sizes ? sizes[size] : sizes.md;

  const { withinGroup, spacing } = useAvatarGroupContext();

  const variantClasses = getVariantClasses({ color, variant, gradient });

  const classes = {
    root: cx(
      getGroupStyles({ withinGroup, spacing }),
      `rounded-${radius}`,
      `w-[${rem(_size)}] min-w-[${rem(_size)}] h-[${rem(_size)}]`,
      apply(
        'focus-styles box-border select-none p-0 border-0 bg-transparent no-underline overflow-hidden block relative',
      ),
      className,
    ),
    placeholder: cx(
      `rounded-${radius}`,
      `text-[${rem(_size / 2.5)}]`,
      variantClasses.placeholder,
      apply(
        'font-sans font-bold flex items-center justify-center w-full h-full select-none',
      ),
    ),
    icon: cx('w-3/4 h-3/4', variantClasses.icon),
    image: apply('object-cover block w-full h-full'),
  };

  return attachClassName('avatar', classes);
}

interface GetGroupStylesInput {
  withinGroup: boolean;
  spacing: KittenSize;
}

function getGroupStyles({ withinGroup, spacing }: GetGroupStylesInput) {
  if (!withinGroup) {
    return '';
  }
  return `
    -ml-${spacing} 
    bg-white dark:bg-${getColor({ color: 'dark', shade: 700 })} 
    border-2 border-solid border-white   
    dark:border-${getColor({ color: 'dark', shade: 700 })}
  `;
}

function getVariantClasses(props: GetVariantInput) {
  const { variant } = props;

  if (!AVATAR_VARIANTS.includes(variant!)) {
    return {};
  }

  const { from, to, deg, color, background, border, hover, dark } =
    getVariant(props);

  return {
    placeholder:
      variant === 'gradient'
        ? `text-${color} bg-gradient-to-${deg} ${from} ${to} border-0 dark:(${from} ${to})`
        : `text-${color} border border-solid border-${border} bg-${background} dark:(text-${dark?.color} bg-${dark?.background})`,
    icon: `text-${color}`,
  };
}
