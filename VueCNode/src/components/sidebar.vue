<template>
    <div class="slidebar">
        <transition name="slidebar-fade">
            <div class="slide-menu" v-show="isShowSidebar">
                <div class="user">
                    <div v-if="isLogin == false">
                        <div class="avatar">
                            <svg t="1564712758137" class="icon" viewBox="0 0 1038 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5383" width="90" height="90"><path d="M369.574768 540.289333c63.060476 100.172338-41.624665 145.478499-85.386973 170.714566C96.134568 818.00482 13.95406 858.085631 13.95406 910.160996v71.076638c0 22.860907 17.101146 42.693486 42.693486 42.693486h924.530709a41.86218 41.86218 0 0 0 42.693486-42.693486v-71.076638c0-52.075365-82.180507-92.156176-270.293114-199.157097-43.702929-25.236066-148.388069-70.542228-85.327593-170.714566 55.934999-83.130571 99.697306-117.035968 99.578548-256.042159 0.118758-131.999471-97.559663-270.233735-241.791204-270.233735-158.541875 0-256.160917 138.293643-256.042159 270.233735-0.118758 139.006191 43.584171 172.852209 99.578549 256.042159z" fill="#ffffff" p-id="5384"></path></svg>
                        </div>
                        <input type="text" v-model="accessToken" placeholder="请输入accessToken">
                        <div class="login" @click="dologin">登 录</div>
                    </div>
                    <div v-if="isLogin && user.loginname">
                        <router-link :to="{ name: 'user', params:{ loginname: user.loginname }}">
                            <div class="avatar">
                                <img :src="user.avatar_url" :alt="user.loginname">
                            </div>
                            <h4>{{user.loginname}}</h4>
                        </router-link>
                    </div>
                </div>
                <ul>
                    <li v-show="isLogin">
                        <router-link :to="'/message'">
                        我的消息 <span class="myMsg" v-if="myMsg != 0">{{myMsg}}</span>
                        </router-link>
                    </li>
                    <li v-if="isLogin && user.loginname">
                        <router-link :to="{ name: 'collect', params:{ loginname: user.loginname }}">我的收藏</router-link>
                    </li>
                    <li v-show="isLogin" @click="logout">退出登录</li>
                    <li>关 于</li>
                </ul>
            </div>
        </transition>
        <div class="mask" @click.stop.prevent="hideSidebar" v-show="isShowSidebar"></div>
    </div>
</template>

<script>
    import common from '../common.js'
export default {
    data() {
        return {
            accessToken: '1232c026-de1f-4e3a-8177-1f2c9ad4bb0f',
            user: []
        }
    },
    computed:{
        isShowSidebar() {
            return this.$store.state.isShowSidebar;
        },
        isLogin(){
            return this.$store.state.isLogin;
        },
        myMsg(){
            return this.$store.state.myMsg;
        }

    },
    mounted () {
        //如果已登录则显示用户信息
        if(this.isLogin){
            this.user = JSON.parse(localStorage.getItem("userInfo"));
            this.$fetch(common.api + '/message/count',{
                        accesstoken: this.accessToken
                })
                .then((myMsg) => {
                    if(myMsg.success){
                        //this.myMsg = myMsg.data;
                        this.$store.commit('myMsg', myMsg.data);
                    }
                })
        }
    },
    methods: {
        hideSidebar(){
            this.$store.commit('showSidebar', false);
        },
        dologin(){
            if(this.accessToken){
                this.$post(common.api + '/accesstoken',{
                        accesstoken: this.accessToken
                })
                .then((response) => {
                    //console.log(response);
                    if(response.success){
                        this.$store.dispatch('isLogin', true);
                        localStorage.setItem("isLogin", this.accessToken);
                        localStorage.setItem("userInfo", JSON.stringify(response));
                        this.user = response;
                    }
                })
                .catch((err) => {
                    console.log('验证失败',err);
                })
            }else{
                alert("请输入accessToken，在设置页面可以看到自己的 accessToken。")
            }
        },
        logout(){
            this.$store.dispatch('isLogin', false);
            localStorage.removeItem("isLogin");
            localStorage.removeItem("userInfo");
        }
    }
    
}
</script>

<style lang="less" scoped>
.mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00000052;
}
.slide-menu{
    position: fixed;
    top: 36px;
    right: 0;
    width: 170px;
    height: 100%;
    background: #666;
    box-shadow: -2px 0 5px 0px #2b2b2b61;
    z-index: 20;
    .user{
        padding: 30px 0;
        text-align: center;
        background: #4a4a4a;
        .avatar{
            overflow: hidden;
            width: 100px;
            height: 100px;
            margin: 0 auto;
            border-radius: 50%;
            background: #d2d2d2;
            svg{
                margin-top: 10px;
            }
            img{
                width: 100%;
            }
        }
        h4{
            margin-top: 10px;
            line-height: 2;
            color: #eee;
        }
        input{
            margin: 5px auto 0;
            width: 80%;
            height: 30px;
            line-height: 30px;
            color: #ccc;
            border-bottom: 1px solid #bbb;
        }
        .login{
            margin: 10px auto 0;
            width: 80px;
            height: 32px;
            line-height: 32px;
            color: #fff;
            background: #80bd01;
            border-radius: 5px;
        }
    }
    ul{
        padding-top: 20px;
        li{
            position: relative;
            width: 78%;
            height: 40px;
            margin: 0 auto 9px;
            line-height: 40px;
            text-align: center;
            color: #eee;
            border-radius: 20px;
            &:hover{
                background: #828282;
            }
            a{
                color: #eee;
            }
            .myMsg{
                position: absolute;
                top: 11px;
                left: -2px;
                display: block;
                padding: 0 5px;
                height: 18px;
                min-width: 18px;
                line-height: 18px;
                font-size: 12px;
                color: #fff;
                background: #cf0061;
                border-radius: 20px;
            }
        }
    }
}

.slidebar-fade-enter-active {
    transition:all .3s linear;
}
.slidebar-fade-leave-active {
    transition:all .3s ease-out;
}
.slidebar-fade-enter, .slidebar-fade-leave-active {
    opacity: 0;
    transform:translateX(100px);
}
</style>
