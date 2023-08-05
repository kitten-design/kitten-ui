import { token } from '@kitten-ui/styles/tokens';
import type { SemanticTokens, Tokens } from '@pandacss/types';
import Chroma from 'chroma-js';

import { colors } from '../../themes/tokens/colors';

function chromaToRgba(chromaColor: Chroma.Color) {
  const rgbaArray = chromaColor.rgba();
  return `rgba(${rgbaArray[0]}, ${rgbaArray[1]}, ${rgbaArray[2]}, ${rgbaArray[3]})`;
}

function getFilledColors(_color: string) {
  return {
    ButtonFilled: { value: `{colors.${_color}.500}` },
    ButtonFilledHover: { value: `{colors.${_color}.600}` },
    ButtonFilledActive: { value: `{colors.${_color}.700}` },
  };
}

function getLightColors(_color: string) {
  const color = token(`colors.${_color}.600` as any);

  return {
    ButtonLight: { value: chromaToRgba(Chroma(color).alpha(0.1)) },
    ButtonLightHover: { value: chromaToRgba(Chroma(color).alpha(0.12)) },
    ButtonLightActive: { value: chromaToRgba(Chroma(color).alpha(0.15)) },
    ButtonLightColor: { value: `{colors.${_color}.500}` },
  };
}

function getOutlineColors(_color: string) {
  const color = token(`colors.${_color}.400` as any);

  return {
    ButtonOutline: { value: `{colors.${_color}.400}` },
    ButtonOutlineHover: { value: chromaToRgba(Chroma(color).alpha(0.05)) },
    ButtonOutlineActive: { value: chromaToRgba(Chroma(color).alpha(0.1)) },
  };
}

export function getVariantColors(_colors: Tokens['colors']) {
  const semanticColors: SemanticTokens['colors'] = {};
  Object.keys(_colors!)
    .filter(
      (color) => !['current', 'black', 'white', 'transparent'].includes(color),
    )
    .forEach((color) => {
      semanticColors[color] = {
        ...getFilledColors(color),
        ...getLightColors(color),
        ...getOutlineColors(color),
      };
    });
  return semanticColors;
}

const whiteColor = Chroma(token('colors.white'));

export const ButtonColors: SemanticTokens['colors'] = {
  ...getVariantColors(colors),

  Button: {
    default: {
      color: {
        value: { base: '{colors.neutral.800}', _dark: '{colors.neutral.100}' },
      },
      bg: {
        value: { base: '{colors.neutral.50}', _dark: '{colors.neutral.800}' },
      },
      bgHover: {
        value: { base: '{colors.neutral.100}', _dark: '{colors.neutral.700}' },
      },
      bgActive: {
        value: { base: '{colors.neutral.200}', _dark: '{colors.neutral.600}' },
      },
      borderColor: {
        value: { base: '{colors.neutral.500}', _dark: '{colors.neutral.500}' },
      },
    },
    disabled: {
      color: {
        value: { base: '{colors.gray.500}', _dark: '{colors.neutral.300}' },
      },
      bg: {
        value: { base: '{colors.gray.200}', _dark: '{colors.neutral.600}' },
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
