import { defineConfig } from 'vite';
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue';
const resolveAlias = require('./tsconfig-alias');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  resolve: {
    alias: resolveAlias(),
    extensions: ['.tsx', '.ts', '.js', '.vue'],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'SmartUI',
      fileName: 'smart-ui'
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
