import { attachClassName, cx } from 'kitten-styles';
import { PolymorphicComponentProps } from '@kitten/utils';
import { $Props } from './$';

export function use$Styles(props: PolymorphicComponentProps<'div', $Props>) {
  const { className } = props;

  const classes = {
    root: cx(className),
  };

  return attachClassName('$', classes);
}
