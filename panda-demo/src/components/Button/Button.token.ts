import { SemanticTokens } from '@pandacss/types';
import { colors } from '../../themes/tokens/colors';

export const ButtonColors: SemanticTokens['colors'] = {
  Button: {
    disabled: {
      color: {
        value: { base: '{colors.gray.500}', _dark: '{colors.neutral.300}' },
      },
      bg: {
        value: { base: '{colors.gray.200}', _dark: '{colors.neutral.600}' },
      },
    },
  },
};

Object.keys(colors)
  .filter(
    (color) => !['current', 'black', 'white', 'transparent'].includes(color),
  )
  .forEach((color) => {
    ButtonColors[color] = {
      ButtonFilled: { value: `{colors.${color}.500}` },
      ButtonFilledHover: { value: `{colors.${color}.600}` },
    };
  });
