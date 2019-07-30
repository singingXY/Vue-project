<template>
    <div class="head">
        <div class="logo">
            <router-link to="/">
                <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg">
            </router-link>
        </div>
        <div class="more" @click.stop.prevent="showSidebar">
            <svg t="1564467609391" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8188" width="28" height="34"><path d="M476.16 211.84h128v128h-128zM476.16 448h128v128h-128zM476.16 684.16h128v128h-128z" fill="#ffffff" p-id="8189"></path></svg>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        showSidebar(){
            this.$store.commit('showSidebar', true)
        }
    }
}
</script>
<style>
    .more{
        position: absolute;
        top: 0;
        right: 10px;
    }
</style>
