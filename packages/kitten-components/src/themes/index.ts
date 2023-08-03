import { definePreset } from '@pandacss/dev';
import { breakpoints } from './breakpoints';
import { keyframes } from './keyframes';
import { layerStyles } from './layerStyles';
import { recipes } from './recipes';
import { semanticTokens } from './semanticTokens';
import { textStyles } from './textStyles';
import { tokens } from './tokens';

export const kittenPreset = definePreset({
  theme: {
    keyframes,
    breakpoints,
    tokens,
    semanticTokens,
    textStyles,
    layerStyles,
    recipes,
  },
});
