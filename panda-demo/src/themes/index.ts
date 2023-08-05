import { definePreset } from '@pandacss/dev';

import { breakpoints } from './breakpoints';
import { conditions } from './conditions';
import { globalCss } from './globalCss';
import { keyframes } from './keyframes';
import { layerStyles } from './layerStyles';
import { patterns } from './patterns';
import { recipes } from './recipes';
import { semanticTokens } from './semanticTokens';
import { textStyles } from './textStyles';
import { tokens } from './tokens';
import { utilities } from './utilities';

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
  conditions,
  patterns,
  utilities,
  globalCss,
});
