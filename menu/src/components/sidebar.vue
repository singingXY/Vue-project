<template>
        <div class="slidebar">
            <transition name="slidebar-fade">
                <div class="slide-menu" v-show="isShowSidebar">
                    <div class="user">
                        .
                    </div>
                    <ul>
                        <li>1</li>
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
        padding: 20px 0;
        text-align: center;
        background: #f6f6f6;
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
