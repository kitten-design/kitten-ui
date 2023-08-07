import { kittenPreset } from '@kitten-ui/core';
import { defineConfig } from '@pandacss/dev';

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
  include: [
    './node_modules/@kitten-ui/core/dist/panda.json',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  staticCss: {
    css: [
      {
        properties: {
          borderRadius: ['*'],
        },
        responsive: true,
      },
    ],
    recipes: {},
  },
});