import type { SemanticTokens } from '@pandacss/types';

import { BoxColors } from '../../components/Box/Box.token';
import { ButtonColors } from '../../components/Button/Button.token';

export const colors: SemanticTokens['colors'] = {
  Common: {
    borderColor: {
      value: { base: '{colors.gray.400}', _dark: '{colors.dark.400}' },
    },
  },
  Body: {
    color: {
      value: { base: '{colors.black}', _dark: '{colors.dark.50}' },
    },
    bg: {
      value: { base: '{colors.white}', _dark: '{colors.dark.700}' },
    },
  },
  ...BoxColors,
  ...ButtonColors,
};
