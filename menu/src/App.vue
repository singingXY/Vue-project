<template>
    <div id="app">
        <VHeader></VHeader>
        <Vlist></Vlist>
    </div>
</template>
<script>
import VHeader from './components/header.vue';
import Vlist from './views/list.vue';

export default {
    components: {
        VHeader,
        Vlist
    }
}
</script>
<style lang="less">
    @import "../src/assets/less/list";
</style>
