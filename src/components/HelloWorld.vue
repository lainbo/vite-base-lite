<template>
  <div class="space-y-16px">
    <div class="box">
      全自动引入VueUse的Api
      <p>鼠标X轴：{{ x }}</p>
      <p>鼠标Y轴：{{ y }}</p>
    </div>

    <div border="~ #ddd" class="px-30px mx-40px">
      <p>count： {{ count }}</p>
      <p>double：{{ double }}</p>
    </div>

    <!-- 组件不用手动引入，全自动按需引入 -->
    <a-button type="primary" @click="count++"> count++ </a-button>

    <div class="text-40px flex-c">
      <!-- 使用类名、属性均可 -->
      <!-- 图标来源 https://icones.js.org/ -->
      <!-- 直接复制即可，不用额外写任何的引入 -->
      <i i-twemoji-hammer-and-wrench />
      <!-- 因为unocss写了主题，并命名了颜色为primary，所以可以写任意text-primary、bg-primary -->
      <i class="text-primary i-mdi-account-outline" />
    </div>
  </div>
</template>

<script setup lang="ts">
// ref、computed等等一系列的vue、vuex、vue-router、pinia、VueUse等等的api，全部不用手动引入，直接用
const count = ref<number>(0)
const double = computed(() => count.value * 2)

// VueUse的用法详见https://vueuse.org/functions.html#category=Browser
const { x, y } = useMouse()
</script>

<style lang="scss" scoped>
.box {
  // 多个类名融合的可以用@apply也可以用--at-apply:
  // 但是尽量不要这么用，因为如果写一个apply也会同样生成一个类，而不会去复用那些包含的class
  // 比如这里就真的会生成一个.box { xxx…… }，最终生成和自己写没有区别，没有缩减体积的效果
  // ps：--at-apply在一个组件写多了会出现<style>部分自动格式化失效的问题
  // 这两个在uno v0.45.13之后的版本尽量不用，因为会导致vscode的unocss插件异常，后果是组件中class无高亮提示
  // 详见 https://github.com/unocss/unocss/issues/1488
  --at-apply: flex flex-col;
  // 因为在uno的设置里配置了，所以可以写text-primary，bg-primary，c-primary等uno拥有的前缀
  @apply w-251px aspect-ratio-square text-primary;

  // 如果不是text也不是bg之类的，uno没有的class，可以用xxx: theme()指令
  text-decoration-color: theme('colors.darkPrimary');
}
</style>
