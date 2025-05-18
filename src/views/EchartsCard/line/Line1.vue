<template>
  <div class="h-full w-full p-20px bg-white">
    <v-chart :option="options" autoresize style="width: 100%; height: 100%" ref="chart" />
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
defineOptions({ name: 'pie1' })
const options = ref({
  backgroundColor: '#080b30',
  title: {
    // text: '哎呦,不错哦',
    textStyle: {
      align: 'center',
      color: '#fff',
      fontSize: 20
    },
    top: '5%',
    left: 'center'
  },
  legend: [
    {
      itemWidth: 30,
      itemHeight: 30,
      icon: 'rect',
      data: [
        { name: '注册总量', itemStyle: { color: 'pink' } },
        { name: '注册总量1', itemStyle: { color: 'red' } }
      ]
    }
  ],
  tooltip: {
    trigger: 'axis',
    show: true,
    // 指示器
    axisPointer: {
      show: true,
      type: 'cross',
      lineStyle: {
        type: 'dashed',
        width: 1
      }
    }
    // 指示器
    // axisPointer: {
    //     lineStyle: {
    //         color: {
    //             type: 'linear',
    //             x: 0,
    //             y: 0,
    //             x2: 0,
    //             y2: 1,
    //             colorStops: [{
    //                 offset: 0,
    //                 color: 'rgba(0, 255, 233,0)'
    //             }, {
    //                 offset: 0.5,
    //                 color: 'rgba(255, 255, 255,1)',
    //             }, {
    //                 offset: 1,
    //                 color: 'rgba(0, 255, 233,0)'
    //             }],
    //             global: false
    //         }
    //     },
    // },
  },
  grid: {
    top: '15%',
    left: '5%',
    right: '5%',
    bottom: '15%'
    // containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      axisLine: {
        show: true
      },
      // 坐标轴在 grid 区域中的分隔区域
      splitArea: {
        // show: true,
        color: '#f00',
        lineStyle: {
          color: '#f00'
        }
      },
      axisLabel: {
        color: '#fff'
      },
      splitLine: {
        show: false
      },
      boundaryGap: false,
      data: ['A', 'B', 'C', 'D', 'E', 'F']
    }
  ],

  yAxis: [
    {
      type: 'value',
      // min: 0,
      // max: 140,
      // splitNumber: 4,
      // 坐标轴在 grid 区域中的分隔线
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.1)'
        }
      },
      // 坐标轴轴线相关设置
      axisLine: {
        show: true
      },
      // 坐标轴刻度标签的相关设置
      axisLabel: {
        show: true,
        margin: 20,
        textStyle: {
          color: '#d1e6eb'
        }
      },
      // 坐标轴刻度相关设置
      axisTick: {
        show: true
      }
    }
  ],
  series: [
    {
      name: '注册总量',
      type: 'line',
      smooth: true, //是否平滑
      showAllSymbol: true,
      // symbol: 'image://./static/images/guang-circle.png',
      // 标记的图形
      // symbol: 'circle',
      symbol: 'none',
      // 标记的大小
      symbolSize: 10,
      //线条样式
      lineStyle: {
        normal: {
          color: '#6c50f3',
          shadowColor: 'rgba(0, 0, 0, .3)',
          shadowBlur: 0,
          shadowOffsetY: 5,
          shadowOffsetX: 5
        }
      },
      // 图形上的文本标签
      // label: {
      //     show: true,
      //     position: 'top',
      //     textStyle: {
      //         color: '#6c50f3',
      //     }
      // },
      // 折线拐点标志的样式
      itemStyle: {
        color: '#6c50f3',
        borderColor: '#fff',
        borderWidth: 3,
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowBlur: 0,
        shadowOffsetY: 2,
        shadowOffsetX: 2
      },
      // 外面设置过tooltip后 可以控制单个折线数据是否显示tooltip
      tooltip: {
        show: true
      },
      // 填充区域的样式
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(108,80,243,0.3)'
              },
              {
                offset: 1,
                color: 'rgba(108,80,243,0)'
              }
            ],
            false
          ),
          shadowColor: 'rgba(108,80,243, 0.9)',
          shadowBlur: 20
        }
      },
      data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02]
    },
    {
      name: '注册总量1',
      type: 'line',
      // smooth: true, //是否平滑
      showAllSymbol: true,
      // symbol: 'image://./static/images/guang-circle.png',
      symbol: 'circle',
      symbolSize: 25,
      //线条样式
      lineStyle: {
        normal: {
          color: '#00ca95',
          shadowColor: 'rgba(0, 0, 0, .3)',
          shadowBlur: 0,
          shadowOffsetY: 5,
          shadowOffsetX: 5
        }
      },
      label: {
        show: true,
        position: 'top',
        textStyle: {
          color: '#00ca95'
        }
      },
      // 折线拐点样式
      itemStyle: {
        color: '#00ca95',
        borderColor: '#fff',
        borderWidth: 3,
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowBlur: 0,
        shadowOffsetY: 2,
        shadowOffsetX: 2
      },
      // 外面设置过tooltip后 可以控制单个折线数据是否显示tooltip
      tooltip: {
        show: false
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(0,202,149,0.3)'
              },
              {
                offset: 1,
                color: 'rgba(0,202,149,0)'
              }
            ],
            false
          ),
          shadowColor: 'rgba(0,202,149, 0.9)',
          shadowBlur: 20
        }
      },
      data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14]
    }
  ]
})
</script>

<style lang="scss" scoped></style>
