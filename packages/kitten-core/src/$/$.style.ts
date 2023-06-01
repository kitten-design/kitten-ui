import { attachClassName, cx } from '@kitten-ui/styles';
import { PolymorphicComponentProps } from '@kitten-ui/utils';
import { $Props } from './$';

export function use$Styles(props: PolymorphicComponentProps<'div', $Props>) {
  const { className } = props;

  const classes = {
    root: cx(className),
  };

  return attachClassName('$', classes);
}
