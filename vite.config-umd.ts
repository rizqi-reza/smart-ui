import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
const resolveAlias = require('./tsconfig-alias');
import externalGlobals from 'rollup-plugin-external-globals';

const componentName = process.env.COMPONENT_NAME;
console.log('run');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({ insertTypesEntry: true }),
    externalGlobals({
      vue: 'Vue',
    }),
  ],
  resolve: {
    alias: resolveAlias(),
    extensions: ['.tsx', '.ts', '.js', '.vue'],
  },
  build: {
    lib: {
      entry: resolve(
        __dirname,
        `src/components/${componentName}/${componentName}.vue`,
      ),
      name: componentName,
      formats: ['umd'],
      fileName: () => `${componentName}.js`,
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
    outDir: 'dist-umd',
  },
});
