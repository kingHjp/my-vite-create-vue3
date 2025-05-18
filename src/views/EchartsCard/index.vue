<template>
  <div class="echarts-card overflow-auto">
    <el-row :gutter="20" class="h-430px mb-20px">
      <el-col :span="6" class="h-full">
        <Pie1></Pie1>
      </el-col>
      <el-col :span="6" class="h-full">
        <div class="h-full bg-white" />
      </el-col>
      <el-col :span="6" class="h-full">
        <div class="h-full bg-white" />
      </el-col>
      <el-col :span="6" class="h-full">
        <div class="h-full bg-white" />
      </el-col>
    </el-row>
    <el-row :gutter="20" class="h-450px mb-20px">
      <el-col :span="6" class="h-full">
        <Line1></Line1>
      </el-col>
      <el-col :span="6" class="h-full">
        <div class="h-full bg-white" />
      </el-col>
      <el-col :span="6" class="h-full">
        <div class="h-full bg-white" />
      </el-col>
      <el-col :span="6" class="h-full">
        <div class="h-full bg-white" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Pie1 from './pie/pie1.vue'
import Line1 from './line/Line1.vue'
defineOptions({ name: 'EchartsCard' })
</script>

<style lang="scss" scoped>
.echarts-card {
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
}
</style>
