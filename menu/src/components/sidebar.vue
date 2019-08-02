<template>
        <div class="slidebar">
            <transition name="slidebar-fade">
                <div class="slide-menu" v-show="isShowSidebar">
                    <div class="user">
                        <div class="avatar">
                            <svg t="1564712758137" class="icon" viewBox="0 0 1038 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5383" width="70" height="70"><path d="M369.574768 540.289333c63.060476 100.172338-41.624665 145.478499-85.386973 170.714566C96.134568 818.00482 13.95406 858.085631 13.95406 910.160996v71.076638c0 22.860907 17.101146 42.693486 42.693486 42.693486h924.530709a41.86218 41.86218 0 0 0 42.693486-42.693486v-71.076638c0-52.075365-82.180507-92.156176-270.293114-199.157097-43.702929-25.236066-148.388069-70.542228-85.327593-170.714566 55.934999-83.130571 99.697306-117.035968 99.578548-256.042159 0.118758-131.999471-97.559663-270.233735-241.791204-270.233735-158.541875 0-256.160917 138.293643-256.042159 270.233735-0.118758 139.006191 43.584171 172.852209 99.578549 256.042159z" fill="#ffffff" p-id="5384"></path></svg>
                            <div class="login">登 录</div>
                        </div>
                    </div>
                    <ul>
                        <li>我的消息</li>
                        <li>我的收藏</li>
                        <li>退出登录</li>
                        <li>关 于</li>
                    </ul>
                </div>
            </transition>
            <div class="mask" @click.stop.prevent="hideSidebar" v-show="isShowSidebar"></div>
        </div>
</template>

<script>
export default {
    computed:{
        isShowSidebar() {
            return this.$store.state.isShowSidebar;
        }
    },
    methods: {
        hideSidebar(){
            this.$store.commit('showSidebar', false);
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
        display: flex;
        justify-content: center;
        padding: 30px 0;
        text-align: center;
        background: #4a4a4a;
    }
    .avatar{
        overflow: hidden;
        position: relative;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #d2d2d2;
        svg{
            margin-top: 6px;
        }
        .login{
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 34px;
            margin-top: 20px;
            line-height: 34px;
            color: #fff;
            background: #80bd01;
        }
    }
    ul{
        padding-top: 20px;
        li{
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
