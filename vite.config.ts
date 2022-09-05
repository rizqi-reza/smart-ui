import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const resolveAlias = require('./tsconfig-alias');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: resolveAlias(),
    extensions: ['.tsx', '.ts', '.js', '.vue'],
  },
});
