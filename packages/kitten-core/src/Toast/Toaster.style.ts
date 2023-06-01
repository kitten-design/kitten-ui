import {
  attachClassName,
  css,
  cx,
  KittenToastPosition,
  rem,
} from 'kitten-styles';
import { PolymorphicComponentProps } from 'kitten-utils';
import { ToasterProps } from './Toaster';

export default function getPositionStyles(
  position: KittenToastPosition = 'bottom-right',
) {
  const [vertical, horizontal] = position?.split('-');
  const classes: string[] = [];

  vertical === 'top' && classes.push('top-sm');
  vertical === 'bottom' && classes.push('bottom-sm');

  horizontal === 'left' && classes.push('left-sm text-left');
  horizontal === 'right' && classes.push('right-sm text-right');
  horizontal === 'center' &&
    classes.push('left-[50%] -translate-x-1/2 text-center');

  return classes.join(' ');
}

export function useToasterStyles(
  props: PolymorphicComponentProps<'div', ToasterProps>,
) {
  const { zIndex, containerWidth, position } = props;

  const classes = {
    root: cx(
      'fixed',
      `z-[${zIndex}] max-w-[${containerWidth}]`,
      getPositionStyles(position),
      css`
        & > div {
          margin-top: ${rem(12)};
        }

        & > div:first-child {
          margin-top: 0;
        }
      `,
    ),
  };

  return attachClassName('toaster', classes);
}
