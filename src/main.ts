import { createApp } from 'vue'
import './style.css'
import 'virtual:uno.css'
import 'echarts'
import App from './App.vue'
// 引入全局注册的组件
import { setupComponents } from './plugins/install.ts'
// 引入状态管理
import { setupStore } from './store/index.ts'
// 路由
import router, { setupRouter } from './router'
const setupAll = async () => {
  const app = createApp(App)
  setupRouter(app)
  setupStore(app)
  setupComponents(app)
  await router.isReady()

  app.mount('#app')
}

setupAll()
