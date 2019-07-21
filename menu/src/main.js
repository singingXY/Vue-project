//报错解决：您使用的是vue的仅运行时版本，模板编译器不可用。或者将模板预编译为呈现函数，或者使用包含编译器的内部版本。
//vue/dist/vue.js
import Vue from 'vue/dist/vue.js'
import list from './views/list'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template:'<list/>',
  components: {list}
})
