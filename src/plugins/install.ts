import type { App } from 'vue'
import ECharts from 'vue-echarts'

export const setupComponents = (app: App<Element>) => {
  app.component('v-chart', ECharts)
}
