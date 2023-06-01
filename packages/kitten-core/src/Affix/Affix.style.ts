import { attachClassName, cx } from 'kitten-styles';
import { PolymorphicComponentProps } from 'kitten-utils';
import { isNil } from 'lodash';
import { AffixProps } from './Affix';

export function useAffixStyles(
  props: PolymorphicComponentProps<'div', AffixProps>,
) {
  const { position } = props;
  const { top, left, bottom, right } = position || {};

  const classes = {
    root: cx(
      'fixed',
      !isNil(top) && `top-[${top}] `,
      !isNil(left) && `left-[${left}]`,
      !isNil(bottom) && `bottom-[${bottom}]`,
      !isNil(right) && `right-[${right}]`,
    ),
  };

  return attachClassName('affix', classes);
}
