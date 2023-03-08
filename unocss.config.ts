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
      // 这里其实可以通过class="fonts-JetBrainsMono"这样的class给DOM一个字体，但是我们的场景更复杂些，我们需要让结果框能显示多种我们定义的字体
      // 如：命名模式中，如果使用了class="fonts-JetBrainsMono"，这个class只会生成一个font-family: 'JetBrains Mono'，这个css不存在其他语言的字体，只有拉丁文，则文本框中的中文将会降级为微软雅黑之类的（翻译服务的报错消息、placeholder中都带有中文），因此不利于存在多种语言的情况
      // 其实UnoCSS提供了解决方案，下方是一个数组，可以写很多的字体，但是感觉十分冗长，还需要对现有代码进行一些修改，我们现有方案是利用css变量进行拼接，已经比较优雅且可维护性强了，所以这里就不用UnoCSS的方案了，仅用作引入文字使用
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
        'margin-top': '-1px',
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
