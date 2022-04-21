<template>
  <div class="">
    help页面
    <p>参数是：{{ queryMsg }}</p>
  </div>
</template>

<script setup>
const route = useRoute()
const queryMsg = ref(route.query.name)
</script>

<style lang="scss" scoped></style>
