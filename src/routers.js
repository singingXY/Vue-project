import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import Index from './views/list.vue'
import Article from './views/article.vue'
import User from './views/user.vue'
import Collect from './views/collect.vue'
import Message from './views/message.vue'
import About from './views/about.vue'

// 安装插件
// 挂载属性
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/topic/:id',
    name: 'article',
    component: Article
  },
  {
    path: '/user/:loginname',
    name: 'user',
    component: User
  },
  {
    path: '/user/:loginname/collections',
    name: 'collect',
    component: Collect
  },
  {
    path: '/message',
    name: 'message',
    component: Message
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '*',
    component: Index
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
export default new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
})
