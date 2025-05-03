import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入状态管理
import { setupStore } from './store/index.ts'
// 路由
import router, { setupRouter } from './router'
const setupAll = async () => {
  const app = createApp(App)
  setupRouter(app)
  setupStore(app)
  await router.isReady()

  app.mount('#app')
}

setupAll()
