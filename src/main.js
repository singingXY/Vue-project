// 报错解决：您使用的是vue的仅运行时版本，模板编译器不可用。或者将模板预编译为呈现函数，或者使用包含编译器的内部版本。
// vue/dist/vue.js
import Vue from 'vue/dist/vue.js'
import router from './routers.js'
import moment from 'moment'
import App from './App'
import { fetch, post } from './common.js'

// vuex
import store from './store'

import 'github-markdown-css'

Vue.config.productionTip = false //  关闭生产模式下给出的提示

Vue.prototype.$fetch = fetch
Vue.prototype.$post = post
Vue.prototype.changeTime = time =>
  moment(time)
    .startOf('minute')
    .fromNow()
    .replace(/hours?/, '小时')
    .replace('ago', '前')
    .replace(/days?/, '天')
    .replace(/minutes?/, '分钟')
    .replace(/\ban?/, '1')
    .replace(/months?/, '个月')
    .replace(/\byears?/, '年')
    .replace(/\s/g, '')
    .replace('fewseconds', '分钟')

router.beforeEach((to, from, next) => {
  // 获取用户登录成功后储存的登录标志
  // 如果登录标志存在，即用户已登录
  if (localStorage.getItem('isLogin')) {
    // 设置vuex登录状态为已登录
    store.state.isLogin = true
  }
  next()
})

router.afterEach((to, from, next) => {
  store.commit('showSidebar', false)
  if (document.documentElement.clientWidth >= 900) {
    store.commit('showSidebar', true)
  }
})

// 创建和挂载根实例。
// 通过 router 配置参数注入路由，从而让整个应用都有路由功能
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 使用store
  components: {
    App
  },
  template: '<App/>'
})
