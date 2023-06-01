import { attachClassName, cx, getVariant, rem } from '@kitten-ui/styles';
import { PolymorphicComponentProps } from '@kitten-ui/utils';
import { ToastProps } from './Toast';

export function useToastStyles(
  props: PolymorphicComponentProps<'div', ToastProps>,
) {
  const { className, color, title, radius } = props;
  const colors = getVariant({ variant: 'filled', color });

  const classes = {
    root: cx(
      'box-border overflow-hidden flex items-center w-auto',
      'relative pr-xs pt-xs pb-xs',
      'bg-white dark:bg-dark-600 shadow-lg',
      `border border-solid border-gray-200 dark:border-dark-600`,
      `rounded-${radius} pl-[${rem(22)}]`,
      `[&::before]:(
        content-['']
        block absolute
        w-[${rem(6)}]
        top-${radius}
        bottom-${radius}
        left-[${rem(4)}]
        rounded-${radius}
        bg-${colors.background}
        dark:bg-${colors.dark?.background}
      )`,
      `[&[data-with-icon]]:(pl-xs [&::before]:hidden)`,
      className,
    ),
    icon: cx(
      'mr-md box-border flex flex-none items-center justify-center',
      `w-[${rem(28)}] h-[${rem(28)}] rounded-[${rem(28)}]`,
      `bg-${colors.background} text-${colors.color}`,
      `dark:bg-${colors.dark?.background} dark:text-${colors.dark?.color}`,
    ),
    loader: cx('mr-md'),
    body: cx('flex-1 overflow-hidden mr-xs break-all'),
    title: cx(
      'leading-[1.4] overflow-hidden text-ellipsis text-gray-900 dark:text-white',
      `mb-[${rem(2)}] `,
    ),
    description: cx(
      'leading-[1.4] overflow-hidden text-ellipsis',
      title
        ? 'text-gray-600 dark:text-dark-200'
        : 'text-black dark:text-dark-50',
    ),
    closeButton: cx('hover:bg-gray-50 dark:hover:bg-dark-800'),
  };

  return attachClassName('toast', classes);
}
