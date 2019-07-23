//报错解决：您使用的是vue的仅运行时版本，模板编译器不可用。或者将模板预编译为呈现函数，或者使用包含编译器的内部版本。
//vue/dist/vue.js
import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import List from './views/list'

import {fetch} from './common.js'
Vue.prototype.$fetch=fetch;

//安装插件
Vue.use(VueRouter);//挂载属性
const routes = [{
  path: '/src/views/list',
  name: 'list',
  component: List
},{
  path: '*',
  component:List
}];


// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
})
// 4. 创建和挂载根实例。
// 通过 router 配置参数注入路由，从而让整个应用都有路由功能eslint-disable no-new
const app = new Vue({
  router
}).$mount('#app')
