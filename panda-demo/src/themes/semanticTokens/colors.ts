import { SemanticTokens } from '@pandacss/types';
import { BoxColors } from '../../components/Box/Box.token';
import { ButtonColors } from '../../components/Button/Button.token';

export const colors: SemanticTokens['colors'] = {
  ...BoxColors,
  ...ButtonColors,
};
