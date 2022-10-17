import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import AutoImport from 'unplugin-auto-import/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      reactivityTransform: true,
    }),

    AutoImport({
      imports: ['vue', 'vue/macros', 'vue-router', '@vueuse/core', 'pinia'],
      dts: 'src/typings/auto-imports.d.ts',
      vueTemplate: true,
    }),

    Components({
      resolvers: [ArcoResolver()],
      dts: 'src/typings/components.d.ts',
    }),
    Unocss(),
    // 拆包插件
    // 支持写库的名字和正则写文件夹
    chunkSplitPlugin({
      strategy: 'default',
      customSplitting: {
        customize: [/src\/utils/, /src\/assets/],
        arco: ['@arco-design/web-vue'],
      },
    }),
  ],
})
