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
    './node_modules/@kitten-ui/core/dist/panda.buildinfo.json',
    './src/**/*.{ts,tsx,js,jsx}',
    // './src/app/**/*.{ts,tsx,js,jsx}',
  ],
  staticCss: {
    css: [
      {
        properties: {
          borderRadius: ['*'],
          bg: ['*'],
        },
        responsive: true,
      },
    ],
    recipes: {},
  },
});
