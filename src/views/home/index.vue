<template>
  <div class="">
    home页面
    <GlobalTemplate ref="aa" />
    <a-button @click="goUrl('help')">跳去help页面</a-button>

    <div class="w-300px h-300px bg-slate-400">1</div>
  </div>
</template>

<script setup>
const aa = ref()
const router = useRouter()
const goUrl = url => {
  router.push({ path: url, query: { name: '张三' } })
}
onMounted(() => {
  console.log(aa.value)
})
</script>

<style lang="scss" scoped></style>
