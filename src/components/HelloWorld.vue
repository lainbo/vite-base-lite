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
    <button border="~" p="6px" @click="count++"> count++ </button>

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
// ref、computed等等一系列的vue、pinia、VueUse等等的api，全部不用手动引入，直接用
const count = ref<number>(0)
const double = computed(() => count.value * 2)

// VueUse的用法详见https://vueuse.org/functions.html#category=Browser
const { x, y } = useMouse()
</script>

<style lang="scss" scoped>
.box {
  @apply bg-white p-20px rounded-10px shadow-md;
}
</style>
