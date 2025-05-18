import HomeView from '../../views/HomeView.vue'
const remainingRouter = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../../views/AboutView.vue')
  },
  {
    path: '/echarts',
    name: 'echarts',
    component: () => import('../../views/EchartsCard/index.vue')
  }
]

export default remainingRouter
