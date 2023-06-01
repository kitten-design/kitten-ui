import { attachClassName, cx } from 'kitten-styles';
import { PolymorphicComponentProps } from '@kitten/utils';
import { AvatarGroupProps } from './AvatarGroup';

export function useAvatarGroupStyles(
  props: PolymorphicComponentProps<'div', AvatarGroupProps>,
) {
  const { spacing } = props;

  const classes = {
    root: cx('flex', `pl-${spacing}`),
  };

  return attachClassName('AvatarGroup', classes);
}
