import { defineConfig, splitVendorChunkPlugin } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsx: 'transform',
  },
  build: {
    target: 'es2015',
    lib: {
      name: 'kittenStyles',
      entry: './src/index.ts',
      fileName: 'index',
    },
  },
  plugins: [
    dts({
      staticImport: true,
      insertTypesEntry: true,
      cleanVueFileName: true,
      copyDtsFiles: false,
      // rollupTypes: true, //把类型打包到一起
      outputDir: 'lib',
    }),
    splitVendorChunkPlugin(),
  ],
});
