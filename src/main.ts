import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 路由
import router, { setupRouter } from './router'
const setupAll = async () => {
  const app = createApp(App)
  setupRouter(app)
  await router.isReady()

  app.mount('#app')
}

setupAll()
