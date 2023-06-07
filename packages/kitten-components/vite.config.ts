import { defineConfig, splitVendorChunkPlugin } from 'vite';
import dts from 'vite-plugin-dts';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsx: 'transform',
  },
  build: {
    target: 'es2015',
    lib: {
      name: 'kittenComponents',
      entry: './src/index.ts',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: { react: 'React' },
      },
    },
  },
  plugins: [
    dts({
      staticImport: true,
      insertTypesEntry: true,
      cleanVueFileName: true,
      copyDtsFiles: false,
      // rollupTypes: true,
      outputDir: 'lib',
    }),
    splitVendorChunkPlugin(),
    vanillaExtractPlugin(),
  ],
});
