import { attachClassName, cx, getColor } from 'kitten-styles';
import { PolymorphicComponentProps } from '@kitten-ui/utils';
import { ImageProps } from './Image';

export function useImageStyles(
  props: PolymorphicComponentProps<'div', ImageProps>,
) {
  const { className, radius, fit } = props;

  const classes = {
    root: cx(className),
    imageWrapper: cx('relative'),
    figure: cx('m-0'),
    image: cx(
      'h-full w-full border-0 block',
      `rounded-${radius}`,
      `object-${fit}`,
    ),
    caption: cx(
      'mt-sm',
      `text-${getColor({ color: 'gray', shade: 700 })}`,
      `dark:text-${getColor({ color: 'dark', shade: 200 })}`,
    ),
    placeholder: cx(
      'cover flex items-center justify-center',
      `text-${getColor({ color: 'gray', shade: 600 })}`,
      `dark:text-${getColor({ color: 'dark', shade: 200 })}`,
      `bg-${getColor({ color: 'gray', shade: 50 })}`,
      `dark:bg-${getColor({ color: 'dark', shade: 800 })}`,
      `rounded-${radius}`,
    ),
  };

  return attachClassName('image', classes);
}
