import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue2'
import jsx from '@vitejs/plugin-vue2-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import  {viteExternalsPlugin}  from 'vite-plugin-externals';

import path from 'path'
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  plugins: [
    vue(),
    jsx(),
    AutoImport({
      include: [/\.[t]sx?$/, /\.vue$/],
      imports: ['vue'],
      eslintrc: {
        enabled: true,
      },
    }),
    viteExternalsPlugin({
      vue: 'Vue',
      'vue-router': 'VueRouter',
    }),
  ],
  build: {
    minify: false,
  },
})