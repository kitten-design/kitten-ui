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
      name: 'kittenComponents',
      entry: './src/index.ts',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', '@kitten-ui/styles'],
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
      outDir: 'lib',
    }),
    splitVendorChunkPlugin(),
  ],
});
