import { attachClassName, cx } from '@kitten-ui/styles';
import { PolymorphicComponentProps } from '@kitten-ui/utils';
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
