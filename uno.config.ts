import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetWebFonts from '@unocss/preset-web-fonts'
export default defineConfig({
  shortcuts: [
    {
      'flex-c': 'flex items-center justify-center',
      'flex-y-c': 'flex items-center',
      'grid-c': 'grid place-items-center',
      'absolute-x-center': 'absolute left-0 right-0 m-inline-auto w-fit',
      'absolute-y-center': 'absolute top-0 bottom-0 m-block-auto h-fit',
      'absolute-center': 'absolute inset-0 m-auto w-fit h-fit',
    },
    [/^horizontal-place-(.*)$/, ([, c]) => `flex items-center space-x-${c}`],
  ],
  rules: [
    [
      /^transition-cusbezier-(\d+)$/,
      ([, d]) => ({ transition: `all ${d}ms var(--ani-bezier)` }),
      { autocomplete: 'transition-cusbezier-400' },
    ],
  ],
  presets: [
    presetUno(),
    presetRemToPx(),
    presetWebFonts({
      fonts: {
        provider: 'bunny',
        Inter: [{ name: 'Inter', weights: ['500'] }],
        NotoSansSc: [{ name: 'Noto Sans SC', weights: ['500'] }],
      },
    }),
    presetAttributify(), // 属性化写法，如<div border="2 rounded blue-200" />
    presetIcons({
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  theme: {
    colors: {
      // 这里写了之后，就可以写text-primary、bg-primary、border-primary等等
      // 如果不是text也不是bg之类的，uno没有的class，可以用theme()指令
      // 如：text-decoration-color: theme('colors.primary');
      primary: '#5b61ff',
    },
  },
  transformers: [
    transformerDirectives(), // 支持@apply text-center my-0 font-medium;这种写法
    transformerVariantGroup(), // <div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>
  ],
  variants: [
    // 因为.scss文件里面,uno不能写"@apply !text-center"去表示 !importannt ,会报错
    // 这里为important写一种变体，让以"I_"开头的class也是important，兼容scss文件
    // 如：@apply I_text-center; 会被转换成css: text-align: center !important;
    matcher => {
      if (!matcher.startsWith('I_')) {
        return matcher
      }
      return {
        matcher: matcher.slice(2),
        body: body => {
          body.forEach(v => v[1] && (v[1] += ' !important'))
          return body
        },
      }
    },
  ],
})
