import {
  attachClassName,
  css,
  cx,
  getVariant,
  KittenColor,
  rem,
} from '@kitten-ui/styles';
import { PolymorphicComponentProps } from '@kitten-ui/utils';
import { TooltipProps } from './Tooltip';
import { isNumber } from 'lodash';

function getColors(_color?: KittenColor) {
  if (!_color) {
    return {
      tooltip: `
        border border-solid border-gray-900 bg-gray-900 
        dark:bg-gray-200 text-white dark:text-black dark:border-gray-200`,
      arrow: 'fill-gray-900 dark:fill-gray-200',
    };
  }

  const { color, border, background, dark } = getVariant({
    variant: 'filled',
    color: _color,
  });

  return {
    tooltip: `
    border border-solid 
    border-${border}
    text-${color} 
    bg-${background} 
   
    dark:(
      border-${dark?.border}
      text-${dark?.color}
      bg-${dark?.background} 
    )
  `,
    arrow: `fill-${background} dark:fill-${dark?.background}`,
  };
}

export function useTooltipStyles(
  props: PolymorphicComponentProps<'div', TooltipProps>,
) {
  const { className, color, radius, multiline, width } = props;
  const colors = getColors(color);
  const classes = {
    root: cx(className),
    tooltip: cx(
      'font-sans leading-[1.55] text-sm px-xs absolute',
      `rounded-${radius}`,
      `py-[${rem(5)}]`,
      multiline ? 'whitespace-normal' : 'whitespace-nowrap',
      colors.tooltip,
      `w-[${isNumber(width) ? width + 'px' : width}]`,
    ),
    arrow: cx(
      colors.arrow,
      css`
        & {
          border: 0;
          z-index: 1;
        }
      `,
    ),
  };

  return attachClassName('tooltip', classes);
}
