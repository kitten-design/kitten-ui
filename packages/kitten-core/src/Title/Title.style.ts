import { attachClassName, cx } from 'kitten-styles';
import { PolymorphicComponentProps } from '@kitten-ui/utils';
import { TitleProps } from './Title';

export function useTitleStyles(
  props: PolymorphicComponentProps<'h1', TitleProps>,
) {
  const { className, order } = props;

  const classes = {
    root: cx('m-0', `text-h${order!}`, className),
  };

  return attachClassName('Title', classes);
}
