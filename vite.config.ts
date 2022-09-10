import { defineConfig } from 'vite';
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts'
import libCss from 'vite-plugin-libcss';
const resolveAlias = require('./tsconfig-alias');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    dts({
      insertTypesEntry: true,
    }),
    libCss(),
  ],
  resolve: {
    alias: resolveAlias(),
    extensions: ['.tsx', '.ts', '.js', '.vue'],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'SmartUI',
      formats: ['es', 'umd'],
      fileName: (format) => `smart-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
