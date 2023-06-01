import { KittenColor, KittenOpacity, KittenShade } from '../types';

import { tw } from '@twind/core';

export function getColor(
  props: {
    color?: KittenColor;
    shade?: KittenShade;
    alpha?: KittenOpacity;
  } = {},
) {
  const { shade = 600, alpha } = props;
  let color = props.color || 'primary';

  if (!isThemeColor(color)) {
    color = 'primary';
  }

  if (['inherit', 'current', 'transparent', 'black', 'white'].includes(color)) {
    return `${color}`;
  }

  if (alpha) {
    return `(${color}-${shade} opacity-${alpha * 100})`;
  }

  return `${color}-${shade}`;
}

export function isThemeColor(color: string = '') {
  return [...new Set(Object.keys(tw.theme('colors')))].includes(color);
}
