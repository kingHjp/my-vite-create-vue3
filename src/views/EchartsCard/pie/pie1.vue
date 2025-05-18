<template>
  <div class="h-full w-full p-20px bg-white relative">
    <v-chart :option="options" autoresize style="width: 100%; height: 100%" ref="chart" />
    <div style="display: flex; margin-right: 20px" class="absolute bottom-30px right-0">
      <div
        v-for="item in dataList"
        :key="item.name"
        style="
          display: flex;
          align-items: center;
          margin-top: 10px;
          margin-right: 20px;
          cursor: pointer;
        "
        @mouseenter="handleMouseenter(item)"
        @mouseleave="handleMouseleave(item)"
        @click="handleClick(item)"
      >
        <i
          :style="{ 'background-color': item.isShow ? item.itemStyle.color : '#CCC' }"
          style="width: 10px; height: 10px; margin-right: 5px; border-radius: 50%"
        ></i>
        <span style="margin-right: 10px">{{ item.name }}</span>
        <span>{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'pie1' })
const dataList = ref([
  { value: 1048, name: 'Search Engine', isShow: true, itemStyle: { color: '#006699' } },
  { value: 735, name: 'Direct', isShow: true, itemStyle: { color: '#009966' } },
  { value: 580, name: 'Email', isShow: true, itemStyle: { color: '#FFCC00' } }
])
const options = ref({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    show: false
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['45%', '50%'],
      center: ['50%', '38.5%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      data: dataList.value
    }
  ]
})
// Import the type for the v-chart component if available, or use generic type
import type { Ref } from 'vue'
// If you know the type of the chart instance, use it instead of 'any'
const chart = useTemplateRef('chart') as Ref<any>
const handleMouseenter = (item: any) => {
  chart.value.dispatchAction({
    type: 'highlight',
    name: item.name
    // seriesIndex: 1
    // dataIndex: 1
    // // 用 index 或 id 或 name 来指定系列。
    // // 可以使用数组指定多个系列。
    // seriesIndex?: number | number[],
    // seriesId?: string | string[],
    // seriesName?: string | string[],

    // // 数据项的 index，如果不指定也可以通过 name 属性根据名称指定数据项
    // dataIndex?: number | number[],
    // // 可选，数据项名称，在有 dataIndex 的时候忽略
    // name?: string | string[],
  })
}
const handleMouseleave = (item: any) => {
  chart.value.dispatchAction({
    type: 'downplay',
    name: item.name
    // seriesIndex: 1
    // dataIndex: 1
    // // 用 index 或 id 或 name 来指定系列。
    // // 可以使用数组指定多个系列。
    // seriesIndex?: number | number[],
    // seriesId?: string | string[],
    // seriesName?: string | string[],

    // // 数据项的 index，如果不指定也可以通过 name 属性根据名称指定数据项
    // dataIndex?: number | number[],
    // // 可选，数据项名称，在有 dataIndex 的时候忽略
    // name?: string | string[],
  })
}
const handleClick = (item: any) => {
  item.isShow = !item.isShow
  chart.value.dispatchAction({
    type: 'legendToggleSelect',
    name: item.name
    // // 用 index 或 id 或 name 来指定系列。
    // // 可以使用数组指定多个系列。
    // seriesIndex?: number | number[],
    // seriesId?: string | string[],
    // seriesName?: string | string[],

    // // 数据项的 index，如果不指定也可以通过 name 属性根据名称指定数据项
    // dataIndex?: number | number[],
    // // 可选，数据项名称，在有 dataIndex 的时候忽略
    // name?: string | string[],
  })
}
</script>

<style lang="scss" scoped></style>
