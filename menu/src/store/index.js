import Vue from 'vue/dist/vue.js'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state:{
        isShowSidebar:false
    },
    mutations:{
        showSidebar(state,value){//这里的state对应着上面这个state
            state.isShowSidebar = value ;
        }
    }
})