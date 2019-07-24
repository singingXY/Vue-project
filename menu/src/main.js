//报错解决：您使用的是vue的仅运行时版本，模板编译器不可用。或者将模板预编译为呈现函数，或者使用包含编译器的内部版本。
//vue/dist/vue.js
import Vue from 'vue/dist/vue.js'
import router from './routers.js'

import {fetch} from './common.js'
Vue.prototype.$fetch=fetch;


// 创建和挂载根实例。
// 通过 router 配置参数注入路由，从而让整个应用都有路由功能eslint-disable no-new
new Vue({
  router
}).$mount('#app')

