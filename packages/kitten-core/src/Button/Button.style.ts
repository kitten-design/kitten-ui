import {
  apply,
  attachClassName,
  css,
  cx,
  getVariantClasses,
  KittenSize,
  rem,
} from 'kitten-styles';
import { PolymorphicComponentProps } from 'kitten-utils';
import { ButtonProps } from './Button';

export const BUTTON_VARIANT = [
  'filled',
  'outline',
  'light',
  'white',
  'default',
  'subtle',
  'gradient',
];

const sizes: Record<string, number[]> = {
  xs: [30, 16],
  sm: [36, 18],
  md: [42, 22],
  lg: [50, 26],
  xl: [60, 32],
  'compact-xs': [22, 7],
  'compact-sm': [26, 8],
  'compact-md': [30, 10],
  'compact-lg': [34, 12],
  'compact-xl': [40, 14],
};

export function getSizes(props: { size?: KittenSize; compact?: boolean }) {
  const { size = 'md', compact = false } = props;

  return sizes[compact ? `compact-${size}` : size] || sizes['md'];
}

function getSizeClasses(props: {
  size?: KittenSize;
  compact?: boolean;
  leftIcon?: boolean;
  rightIcon?: boolean;
}) {
  const { leftIcon, rightIcon } = props;
  const px = getSizes(props);

  return `
    h-[${rem(px[0])}] 
    pl-[${rem(px[1] / (leftIcon ? 1.5 : 1))}] 
    pr-[${rem(px[1] / (rightIcon ? 1.5 : 1))}]
  `;
}

export function useButtonStyles(
  props: PolymorphicComponentProps<'button', ButtonProps>,
) {
  const {
    className,
    radius,
    fullWidth,
    size,
    variant,
    gradient,
    color,
    compact,
    loading,
    leftIcon,
    loaderPosition,
    rightIcon,
    unstyled,
  } = props;

  if (unstyled) {
    return {
      root: cx(
        apply(
          'text-black dark:text-dark-50',
          'font-sans focus-styles text-md text-left bg-transparent cursor-pointer',
          'border-0 p-0 no-underline box-border',
        ),
        className,
      ),
      inner: undefined,
      label: undefined,
      leftIcon: cx('hidden'),
      rightIcon: cx('hidden'),
      centerIcon: cx('hidden'),
    };
  }

  const classes = {
    root: cx(
      `text-${size} rounded-${radius}`,
      `${fullWidth ? 'block w-full' : 'inline-block w-auto'}`,
      getVariantClasses({ variant, color, gradient, variants: BUTTON_VARIANT }),
      getSizeClasses({
        size,
        compact,
        leftIcon: !!(leftIcon || (loading && loaderPosition === 'left')),
        rightIcon: !!(rightIcon || (loading && loaderPosition === 'right')),
      }),
      apply(
        'relative select-none cursor-pointer font-semibold font-sans',
        'focus-styles',
        '!disabled:(bg-gray-200 text-gray-500 transform-none cursor-not-allowed !border-transparent bg-none dark:(bg-dark-400 text-dark-600))',
      ),
      css`
        &:not(:disabled):active {
          transform: translateY(0.0625rem);
        }
        &[data-loading='true'] {
          pointer-events: none;
          &::before {
            content: '';
            background-color: rgba(255, 255, 255, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.5);
            position: absolute;
            top: ${rem(-1)};
            bottom: ${rem(-1)};
            left: ${rem(-1)};
            right: ${rem(-1)};
            cursor: not-allowed;
          }
        }
        .dark &[data-loading='true'] {
          &::before {
            border: 1px solid rgba(26, 27, 30, 0.5);
            background-color: rgba(26, 27, 30, 0.5);
          }
        }
      `,
      `[&[data-loading]]:before:rounded-${radius}`,
      className,
    ),
    inner: cx('flex items-center justify-center h-full overflow-visible'),
    label: cx('whitespace-nowrap h-full overflow-hidden flex items-center'),
    leftIcon: cx('flex items-center mr-2 overflow-hidden'),
    rightIcon: cx('flex items-center ml-2 overflow-hidden'),
    centerIcon: cx('absolute opacity-70'),
  };
  return attachClassName('button', classes);
}
