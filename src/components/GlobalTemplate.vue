<template>
  <div class="" @click="test">全局组件</div>
</template>

<script setup>
const test = () => {
  console.log(1)
}
defineExpose({
  test
})
</script>

<style lang="scss" scoped></style>
