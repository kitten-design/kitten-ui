import { kittenPreset } from '@kitten-ui/core';
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  emitPackage: true,
  outdir: '@kitten-ui/styles',
  jsxFramework: 'react',
  presets: [kittenPreset],
  exclude: [],
  include: [
    './node_modules/@kitten-ui/core/dist/panda.buildinfo.json',
    './node_modules/@kitten-ui/core/**/*.{js,jsx,ts,tsx,mdx}',
    './pages/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
  ],
});
