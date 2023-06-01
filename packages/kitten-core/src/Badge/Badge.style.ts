import {
  attachClassName,
  css,
  cx,
  getColor,
  KittenPosition,
  rem,
} from 'kitten-styles';
import { PolymorphicComponentProps } from '@kitten-ui/utils';
import { BadgeProps } from './Badge';

export function useBadgeStyles(
  props: PolymorphicComponentProps<'div', BadgeProps>,
) {
  const {
    inline,
    zIndex,
    label,
    size,
    radius,
    color,
    withBorder,
    position,
    offset,
  } = props;

  const classes = {
    root: cx('relative', inline ? 'inline-block' : 'block'),
    label: cx(
      'absolute text-white whitespace-nowrap text-xs',
      `z-[${zIndex}]`,
      `${label ? 'min-w' : 'w'}-[${rem(size)}]`,
      `h-[${rem(size)}]`,
      'flex items-center justify-center text-xs',
      `px-[${label ? rem(5) : 0}]`,
      `rounded-${radius}`,
      `bg-${getColor({ color, shade: 600 })}`,
      `dark:bg-${getColor({ color, shade: 800 })}`,
      withBorder && 'border-(2 solid white) dark:border-dark-700',
      getPositionStyles(position!, rem(offset)),
    ),
  };

  return attachClassName('badge', classes);
}

function getPositionStyles(_position: KittenPosition, offset: string) {
  const styles: Record<string, string> = {};
  const [position, placement] = _position.split('-');
  let translateX = '';
  let translateY = '';

  if (position === 'top') {
    styles.top = offset;
    translateY = '-50%';
  }

  if (position === 'middle') {
    styles.top = '50%';
    translateY = '-50%';
  }

  if (position === 'bottom') {
    styles.bottom = offset;
    translateY = '50%';
  }

  if (placement === 'start') {
    styles.left = offset;
    translateX = '-50%';
  }

  if (placement === 'center') {
    styles.left = '50%';
    translateX = '-50%';
  }

  if (placement === 'end') {
    styles.right = offset;
    translateX = '50%';
  }

  return css`
    & {
      top: ${styles.top};
      bottom: ${styles.bottom};
      left: ${styles.left};
      right: ${styles.right};
      transform: translate(${translateX}, ${translateY});
    }
  `;
}
