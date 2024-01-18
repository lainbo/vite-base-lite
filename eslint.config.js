import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/block-order': ['error', { order: [['script', 'template'], 'style'] }], // vue格式文件的3个tag顺序, 前两个顺序无所谓
      'vue/custom-event-name-casing': ['error', 'camelCase'], // vue的自定义事件名必须是小驼峰
    },
  },

  {
    rules: {
      'eqeqeq': ['error', 'always'],
      'quote-props': ['error', 'consistent-as-needed'],
      'curly': ['error', 'all'],
    },
  },
)
