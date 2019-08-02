<template>
    <div class="head">
        
        <div class="back" @click.stop.prevent="$router.go(-1)">
            <svg v-show="showBack" t="1564367329808" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6281" width="20" height="36"><path d="M769.405 977.483c-27.074 27.568-71.045 27.568-98.121 0l-416.591-423.804c-27.173-27.568-27.173-72.231 0-99.899l416.492-423.804c13.537-13.734 31.324-20.652 49.109-20.652s35.572 6.917 49.109 20.652c27.173 27.568 27.173 72.331 0 99.899l-367.482 373.806 367.482 373.904c27.074 27.568 27.074 72.231 0 99.899z" p-id="6282" fill="#ffffff"></path></svg>
        </div>
        <div class="logo">
            <router-link to="/">
                <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg">
            </router-link>
        </div>
        <div class="more" @click.stop.prevent="showSidebar">
            <svg t="1564467609391" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8188" width="28" height="36"><path d="M476.16 211.84h128v128h-128zM476.16 448h128v128h-128zM476.16 684.16h128v128h-128z" fill="#ffffff" p-id="8189"></path></svg>
        </div>
        
        <Sidebar></Sidebar>
    </div>
</template>
<script>
import Sidebar from '@/components/sidebar.vue';
export default {
    components: {
        Sidebar
    },
    computed:{
        isShowSidebar() {
            return this.$store.state.isShowSidebar;
        },
        showBack(){
            if(this.$route.name != '' && this.$route.name != 'index' ){
                return this.$route.name;
            }
        }
    },
    methods: {
        showSidebar(){
            this.$store.commit('showSidebar', true)
        }
    }
}

</script>
<style>

</style>
