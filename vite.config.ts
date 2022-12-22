import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import resolveAlias from './tsconfig-alias';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({ insertTypesEntry: true })],
  resolve: {
    alias: resolveAlias(),
    extensions: ['.tsx', '.ts', '.js', '.vue'],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'SmartUI',
      formats: ['es'],
      fileName: 'smart-ui',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
    emptyOutDir: false,
  },
});
