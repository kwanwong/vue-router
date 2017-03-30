// main.js

// 导入Vue，这个是必需的，在使用Vue之前，必须先导入
import Vue from 'vue'

// 导入 vue-router，并使用
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入 pages 下的 Home.vue
import Home from './pages/Home'
import Detail from './pages/Detail'

// 定义路由配置
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/detail',
    component: Detail
  }
]

// 创建路由实例
const router = new VueRouter({
  routes
})

// 创建 Vue 实例
new Vue({
  router,
}).$mount("#app")