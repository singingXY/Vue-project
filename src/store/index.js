import Vue from 'vue/dist/vue.js'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state:{
        isShowSidebar: false,
        isLogin: false,
        myMsg: 0
    },
    getters: {
      //获取登录状态
      isLogin: state => state.isLogin,
    },
    mutations:{
        showSidebar(state,value){//这里的state对应着上面这个state
            state.isShowSidebar = value ;
        },
        Login(state,value){
            state.isLogin = value ;
        },
        myMsg(state,value){
            state.myMsg = value ;
        }
    },
    // 应用mutations
    actions: {
        //获取登录状态
        isLogin({commit}, flag) {
            commit("Login", flag)
        },
    }
})