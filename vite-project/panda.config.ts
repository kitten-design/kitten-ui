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
    './node_modules/@kitten-ui/styles/dist/panda.buildinfo.json',
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './pages/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  staticCss: {
    css: [
      {
        properties: {
          borderRadius: ['*'],
          colors: ['*'],
          bg: ['*'],
        },
        responsive: true,
      },
    ],
    recipes: {},
  },
});
