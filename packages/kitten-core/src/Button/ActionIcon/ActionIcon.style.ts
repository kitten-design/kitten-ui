import {
  apply,
  attachClassName,
  css,
  cx,
  getVariantClasses,
  KittenSize,
  rem,
} from 'kitten-styles';
import { PolymorphicComponentProps } from '@kitten-ui/utils';
import { isNumber } from 'lodash';
import { BUTTON_VARIANT } from '../Button.style';
import { ActionIconProps } from './ActionIcon';

const sizes: Record<string, number[]> = {
  xs: [18],
  sm: [22],
  md: [28],
  lg: [34],
  xl: [44],
};

export function getSizes(props: { size?: KittenSize | number }) {
  const { size = 'md' } = props;
  if (isNumber(size)) return size;
  return sizes[size][0] || sizes['md'][0];
}

function getSizeClasses(props: { size?: KittenSize | number }) {
  const px = rem(getSizes(props));

  return `h-[${px}] w-[${px}] min-h-[${px}] min-w-[${px}]`;
}

export function useActionIconStyles(
  props: PolymorphicComponentProps<'button', ActionIconProps>,
) {
  const { className, radius, size, variant, gradient, color } = props;

  const classes = {
    root: cx(
      `rounded-${radius} text-${size} leading-none`,
      getSizeClasses({ size }),
      getVariantClasses({ variant, color, gradient, variants: BUTTON_VARIANT }),
      css`
        &:not(:disabled):active {
          transform: translateY(0.0625rem);
        }
        & [data-action-icon-loader] {
          max-width: 70%;
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
      apply(
        `[&[data-loading]]:before:rounded-${radius}`,
        'relative p-0 flex items-center justify-center select-none cursor-pointer font-semibold',
        '!disabled:(bg-gray-200 text-gray-500 transform-none cursor-not-allowed !border-transparent bg-none dark:(bg-dark-400 text-dark-600))',
      ),
      className,
    ),
  };
  return attachClassName('actionIcon', classes);
}
