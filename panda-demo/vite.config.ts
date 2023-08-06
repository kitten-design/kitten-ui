import react from '@vitejs/plugin-react-swc';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  esbuild: {
    jsx: 'transform',
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
});
