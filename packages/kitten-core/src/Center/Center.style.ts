import { attachClassName, cx } from '@kitten-ui/styles';
import { PolymorphicComponentProps } from '@kitten-ui/utils';
import { CenterProps } from './Center';

export function useCenterStyles(
  props: PolymorphicComponentProps<'div', CenterProps>,
) {
  const { className, inline } = props;

  const classes = {
    root: cx(
      inline ? 'inline-flex' : 'flex',
      'items-center justify-center',
      className,
    ),
  };

  return attachClassName('center', classes);
}
