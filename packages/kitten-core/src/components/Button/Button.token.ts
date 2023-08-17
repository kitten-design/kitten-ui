import type { SemanticTokens, Tokens } from '@pandacss/types';
import Chroma from 'chroma-js';

import { colors } from '../../themes/tokens/colors';

type Color = keyof Omit<
  typeof colors,
  'current' | 'black' | 'white' | 'transparent'
>;

const chromaToRgba = (chromaColor: Chroma.Color) => {
  const rgbaArray = chromaColor.rgba();
  return `rgba(${rgbaArray[0]}, ${rgbaArray[1]}, ${rgbaArray[2]}, ${rgbaArray[3]})`;
};

const getFilledColors = (_color: Color) => {
  return {
    ButtonFilled: {
      value: {
        base: `{colors.${_color}.600}`,
        _dark: `{colors.${_color}.800}`,
      },
    },
    ButtonFilledHover: { value: `{colors.${_color}.700}` },
    ButtonFilledActive: {
      value: {
        base: `{colors.${_color}.800}`,
        _dark: `{colors.${_color}.600}`,
      },
    },
  };
};

const getLightColors = (_color: Color) => {
  const color = colors[_color]?.[500].value;

  return {
    ButtonLight: { value: chromaToRgba(Chroma(color).alpha(0.1)) },
    ButtonLightHover: { value: chromaToRgba(Chroma(color).alpha(0.12)) },
    ButtonLightActive: { value: chromaToRgba(Chroma(color).alpha(0.15)) },
    ButtonLightColor: { value: `{colors.${_color}.500}` },
  };
};

const getOutlineColors = (_color: Color) => {
  const color = colors[_color]?.[400].value;
  return {
    ButtonOutline: { value: `{colors.${_color}.400}` },
    ButtonOutlineHover: { value: chromaToRgba(Chroma(color).alpha(0.05)) },
    ButtonOutlineActive: { value: chromaToRgba(Chroma(color).alpha(0.1)) },
  };
};

export const getVariantColors = (_colors: Tokens['colors']) => {
  const semanticColors: SemanticTokens['colors'] = {};
  (
    Object.keys(_colors!).filter(
      (color) => !['current', 'black', 'white', 'transparent'].includes(color),
    ) as Color[]
  ).forEach((color) => {
    semanticColors[color] = {
      ...getFilledColors(color),
      ...getLightColors(color),
      ...getOutlineColors(color),
    };
  });
  return semanticColors;
};

const whiteColor = Chroma(colors.white.value);

export const ButtonColors: SemanticTokens['colors'] = {
  ...getVariantColors(colors),

  Button: {
    default: {
      color: { value: { base: '{colors.black}', _dark: '{colors.white}' } },
      bg: { value: { base: '{colors.white}', _dark: '{colors.dark.600}' } },
      bgHover: {
        value: { base: '{colors.gray.50}', _dark: '{colors.dark.500}' },
      },
      bgActive: {
        value: { base: '{colors.gray.100}', _dark: '{colors.dark.400}' },
      },
      borderColor: {
        value: { base: '{colors.gray.400}', _dark: '{colors.dark.400}' },
      },
    },
    disabled: {
      color: {
        value: { base: '{colors.gray.500}', _dark: '{colors.dark.300}' },
      },
      bg: {
        value: { base: '{colors.gray.200}', _dark: '{colors.dark.600}' },
      },
    },
    white: {
      bgHover: {
        value: chromaToRgba(whiteColor.darken(0.1)),
      },
      bgActive: {
        value: chromaToRgba(whiteColor.darken(0.2)),
      },
    },
  },
};
