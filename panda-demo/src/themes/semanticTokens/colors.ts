import { SemanticTokens } from '@pandacss/types';
import { ButtonColors } from '../../components/Button/Button.token';

export const colors: SemanticTokens['colors'] = {
  Box: {
    color: {
      value: { base: '{colors.neutral.800}', _dark: '{colors.neutral.100}' },
    },
    bg: {
      value: { base: '{colors.neutral.50}', _dark: '{colors.neutral.900}' },
    },
  },
  ...ButtonColors,
};
