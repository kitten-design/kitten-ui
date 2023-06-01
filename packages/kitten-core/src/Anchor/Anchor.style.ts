import { attachClassName, cx, getColor } from 'kitten-styles';
import { PolymorphicComponentProps } from 'kitten-utils';
import { AnchorProps } from './Anchor';

export function useAnchorStyles(
  props: PolymorphicComponentProps<'a', AnchorProps>,
) {
  const { className, underline } = props;

  const classes = {
    root: cx(
      'bg-transparent cursor-pointer p-0 border-none',
      `hover:${underline ? 'underline' : 'no-underline'}`,
      className,
    ),
  };

  return attachClassName('anchor', classes);
}
