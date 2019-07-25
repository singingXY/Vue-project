<template>
    <div id="app">
        <VHeader></VHeader>
        <router-view></router-view>
    </div>
</template>
<script>
import VHeader from './components/header.vue';

export default {
    name: 'app',
    components: {
        VHeader
    }
}
</script>
<style lang="less">
    @import "../src/assets/less/list";
</style>
