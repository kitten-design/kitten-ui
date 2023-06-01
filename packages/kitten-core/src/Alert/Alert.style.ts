import {
  attachClassName,
  css,
  cx,
  getVariantClasses,
  rem,
} from 'kitten-styles';
import { PolymorphicComponentProps } from '@kitten/utils';
import { AlertProps } from './Alert';

export const ALERT_VARIANT = ['filled', 'outline', 'light'];

export function useAlertStyles(
  props: PolymorphicComponentProps<'div', AlertProps>,
) {
  const { radius, variant, color, className } = props;

  const classes = {
    root: cx(
      `rounded-${radius}`,
      'focus-styles relative overflow-hidden p-sm pl-md',
      getVariantClasses({
        color,
        variant,
        variants: ALERT_VARIANT,
        withHover: false,
      }),
      className,
    ),
    wrapper: cx('flex'),
    icon: cx(
      `w-[${rem(20)}] h-[${rem(20)}]`,
      `[&>*]:(w-[${rem(20)}] h-[${rem(20)}])`,
      'flex items-center justify-start overflow-hidden',
      'mr-md mt-[1]',
    ),
    body: cx('flex-1 max-w-full'),
    title: cx(
      'box-border m-0 mb-xs',
      'flex items-center justify-between',
      'text-sm leading-[1.55] font-bold',
      '[&[data-with-close-button]]:pr-md',
    ),
    label: cx('block truncate'),
    message: cx(
      'focus-styles',
      'text-sm leading-[1.55]',
      'overflow-hidden text-ellipsis',
      variant === 'filled' && 'text-white',
      variant === 'light' && 'text-black dark:text-white',
      variant === 'outline' && 'text-black dark:text-dark-50',
    ),
    closeButton: cx(`w-[${rem(10)}] h-[${rem(10)}]`),
  };

  return attachClassName('alert', classes);
}
