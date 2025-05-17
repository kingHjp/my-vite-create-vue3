<template>
  <div
    class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
  >
    aaaagfd
  </div>
  <el-color-picker v-model="color1" />
</template>

<script setup lang="ts">
import img123 from '@/assets/img/11.png'
import svg2 from '@/assets/svg/2.svg'
defineOptions({ name: 'AboutView' })
const color1 = ref('#409EFF')
</script>

<style lang="scss" scoped></style>
