import { definePreset } from '@pandacss/dev';
import { breakpoints } from './breakpoints';
import { keyframes } from './keyframes';
import { tokens } from './tokens';
import { textStyles } from './typography';

export const kittenPreset = definePreset({
  theme: {
    keyframes,
    breakpoints,
    tokens,
    textStyles,
  },
});
