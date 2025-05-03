<template>
  <div style="height: 100%">
    <div> HomeView </div>
    <div>{{ appStore.num }}</div>
    <button @click="handleDemo(1)">测试</button>
  </div>
</template>

<script setup lang="ts">
import { useAppStoreWithOut } from '../store/modules/app.ts'
defineOptions({ name: 'HomeView' })
const appStore = useAppStoreWithOut()
const handleDemo = (value: number) => {
  appStore.setNum(appStore.num + value)
  console.log('appStore.num', appStore.num)
}
</script>

<style lang="scss" scoped></style>
