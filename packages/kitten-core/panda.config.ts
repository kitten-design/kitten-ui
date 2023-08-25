import { defineConfig } from '@pandacss/dev';

import { kittenPreset } from './src/themes';

export default defineConfig({
  preflight: true,
  emitPackage: true,
  outdir: '@kitten-ui/styles',
  jsxFramework: 'react',
  presets: [kittenPreset],
  theme: {
    extend: {},
  },
  exclude: [],
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  staticCss: {
    css: [
      {
        properties: {
          borderRadius: ['*'],
          boxShadow: ['*'],
          colorPalette: ['green'],
        },
        responsive: true,
      },
    ],
    recipes: {},
  },
});
