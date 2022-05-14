<template>
  <div class="">
    home页面
    <GlobalTemplate ref="aa" />
    <a-button @click="goUrl('help')">跳去help页面</a-button>

    <component :is="comName === 'Dt01' ? Dt01 : Dt02" />
  </div>
</template>

<script setup>
import Dt01 from '@/components/dt01.vue'
import Dt02 from '@/components/dt02.vue'
const aa = ref()
const comName = ref('Dt01')
const router = useRouter()
const goUrl = url => {
  router.push({ path: url, query: { name: '张三' } })
}
onMounted(() => {
  console.log(aa.value)
})
</script>

<style lang="scss" scoped></style>
