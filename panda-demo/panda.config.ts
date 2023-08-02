import { defineConfig } from '@pandacss/dev';
import { kittenPreset } from '@kitten-ui/components';

export default defineConfig({
  presets: [kittenPreset],

  emitPackage: true,

  outdir: '@kitten-ui/styles',

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
});
