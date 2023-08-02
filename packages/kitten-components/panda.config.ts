import { defineConfig } from '@pandacss/dev';
import { kittenPreset } from './src/themes';

export default defineConfig({
  preflight: true,
  emitPackage: true,
  outdir: '@kitten-ui/styles',
  jsxFramework: 'react',
  presets: [kittenPreset],
  exclude: [],
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
});
