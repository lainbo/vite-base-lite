<template>
  <div class="">
    home页面
    <GlobalTemplate />
    <a-button @click="goUrl('help')">跳去help页面</a-button>
  </div>
</template>

<script setup>
const router = useRouter()
const goUrl = url => {
  router.push({ path: url, query: { name: '张三' } })
}
</script>

<style lang="scss" scoped></style>
