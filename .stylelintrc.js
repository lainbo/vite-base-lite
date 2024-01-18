export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
  ],
  plugins: [
    '@stylistic/stylelint-plugin',
  ],
  rules: {
    // stylistic开头的为stylelint将要废弃的规则
    // 官方推荐使用prettier进行格式化(怎么可能!?!?), 所以这里使用了官方推荐的兼容插件处理未来可能出现的弃用情况
    '@stylistic/indentation': 2, // 缩进2个空格
    '@stylistic/block-opening-brace-space-before': 'always', // { 前必须有空格
    '@stylistic/declaration-block-semicolon-space-before': 'never', // ; 前不允许有空格
    '@stylistic/declaration-colon-space-before': 'never', // : 前不允许有空格
    '@stylistic/declaration-colon-space-after': 'always-single-line', // : 后必须有空格
    '@stylistic/media-feature-colon-space-after': 'always', // 媒体查询 : 后必须有空格
    '@stylistic/selector-combinator-space-after': 'always', // 选择器组合符后必须有空格
    '@stylistic/selector-combinator-space-before': 'always', // 选择器组合符前必须有空格
    '@stylistic/selector-descendant-combinator-no-non-space': true, // 选择器后代组合符前不允许有空格
    '@stylistic/selector-list-comma-space-before': 'never', // 选择器逗号前不允许有空格
    '@stylistic/selector-list-comma-space-after': 'always-single-line', // 在单行选择器列表中, 逗号后必须始终有一个空格
    '@stylistic/value-list-comma-space-before': 'never', // 属性值逗号前不允许有空格
    '@stylistic/value-list-comma-space-after': 'always-single-line', // 单行属性值中逗号后必须始终有一个空格
    '@stylistic/function-comma-space-after': 'always-single-line', // 函数逗号后必须有空格
    'color-function-notation': null, // 颜色函数使用传统写法
    'comment-whitespace-inside': 'always', // 注释/*后和*/前必须有空格
    'custom-property-no-missing-var-function': null, // 自定义属性不检查var函数
    'no-empty-source': null, // 空文件检查规则关闭
    'property-no-vendor-prefix': null, // 属性不检查浏览器前缀
    'selector-class-pattern': null, // 选择器类名检查规则关闭
  },
}
