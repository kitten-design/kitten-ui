import react from '@vitejs/plugin-react-swc';
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
      name: 'kittenDateset',
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
    react(),
    dts({
      staticImport: true,
      insertTypesEntry: true,
      cleanVueFileName: true,
      copyDtsFiles: false,
      // rollupTypes: true,
      outDir: 'lib',
    }),
    splitVendorChunkPlugin(),
  ],
});
