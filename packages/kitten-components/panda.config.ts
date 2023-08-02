import { defineConfig } from '@pandacss/dev';
import { kittenPreset } from './src/themes';
import pandaPreset from '@pandacss/preset-panda';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  presets: [pandaPreset, kittenPreset],

  emitPackage: true,

  // The output directory for your css system
  outdir: '@kitten-ui/styles',
});
