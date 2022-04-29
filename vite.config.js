import { defineConfig } from 'vite'
import { resolve } from 'path'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import WindiCSS from 'vite-plugin-windicss'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
// 移动端
// import PostcssPxToViewport from 'postcss-px-to-viewport'

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    WindiCSS(),
    Pages({
      dirs: 'src/views'
    }),
    AutoImport({
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      },
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core']
    }),
    Components({
      resolvers: [ArcoResolver()]
    }),
    chunkSplitPlugin({
      strategy: 'default',
      customSplitting: {
        utils: [/src\/utils/],
        assets: [/src\/assets/]
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  css: {
    postcss: {
      // 移动端
      // plugins: [
      //   PostcssPxToViewport({
      //     unitToConvert: 'px', // 要转化的单位
      //     viewportWidth: 1920, // UI设计稿的宽度 750
      //     unitPrecision: 4, // 转换后的精度，即小数点位数
      //     propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      //     viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
      //     fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
      //     selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
      //     minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      //     mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      //     replace: true // 是否转换后直接更换属性值
      //   })
      // ]
    }
  }
})
