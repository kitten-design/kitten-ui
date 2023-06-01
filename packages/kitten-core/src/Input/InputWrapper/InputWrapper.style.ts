import { attachClassName, cx } from 'kitten-styles';
import { PolymorphicComponentProps } from 'kitten-utils';
import { InputWrapperProps } from './InputWrapper';

export function useInputWrapperStyles(
  props: PolymorphicComponentProps<'div', InputWrapperProps>,
) {
  const { className } = props;

  const classes = {
    root: cx('font-sans leading-[1.55]', className),
  };

  return attachClassName('inputWrapper', classes);
}
