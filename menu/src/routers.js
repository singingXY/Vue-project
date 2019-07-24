import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import Index from './App'


//安装插件
Vue.use(VueRouter);//挂载属性

const routes = [{
    path: '/',
    name: 'index',
    component: Index
  },{
    path: '*',
    component:Index
  }];
  
  
  // 3. 创建 router 实例，然后传 `routes` 配置
  export default new VueRouter({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
  })