import type { Tokens } from '@pandacss/types';

import { animations } from './animations';
import { borders } from './borders';
import { colors } from './colors';
import { shadows } from './shadows';
import { sizes } from './sizes';
import { fonts, fontSizes, fontWeights, letterSpacings, lineHeights } from './typography';

const defineTokens = <T extends Tokens>(v: T) => v;

export const tokens = defineTokens({
  borders,
  easings: {
    default: { value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
    linear: { value: 'linear' },
    in: { value: 'cubic-bezier(0.4, 0, 1, 1)' },
    out: { value: 'cubic-bezier(0, 0, 0.2, 1)' },
    'in-out': { value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
  },
  durations: {
    fastest: { value: '50ms' },
    faster: { value: '100ms' },
    fast: { value: '150ms' },
    normal: { value: '200ms' },
    slow: { value: '300ms' },
    slower: { value: '400ms' },
    slowest: { value: '500ms' },
  },
  radii: {
    xs: { value: '0.125rem' },
    sm: { value: '0.25rem' },
    md: { value: '0.5rem' },
    lg: { value: '1rem' },
    xl: { value: '2rem' },
    full: { value: '9999px' },
  },
  fontWeights,
  lineHeights,
  fonts,
  letterSpacings,
  fontSizes,
  shadows,
  colors,
  blurs: {
    xs: { value: '4px' },
    sm: { value: '8px' },
    md: { value: '12px' },
    lg: { value: '16px' },
    xl: { value: '24px' },
  },
  spacing: {
    xs: { value: '0.625rem' },
    sm: { value: '0.75rem' },
    md: { value: '1rem' },
    lg: { value: '1.25rem' },
    xl: { value: '2rem' },
  },
  sizes,
  animations,
  zIndex: {
    badge: { value: 200 },
    affix: { value: 300 },
    tooltip: { value: 300 },
    popover: { value: 300 },
    modal: { value: 400 },
    toaster: { value: 500 },
  },
});
