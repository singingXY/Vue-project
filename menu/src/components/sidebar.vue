<template>
        <div class="sidebar">
            <transition name="slidebar">
                <div class="side-menu">
                    <div class="user">
                        .
                    </div>
                </div>
            </transition>
            <div class="mask" @click.stop.prevent="showSidebar"></div>
        </div>
</template>

<script>
export default {
    methods: {
        showSidebar(){
            //console.log("1:"+this.$store.state.isShowSidebar);
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
.side-menu{
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
</style>
