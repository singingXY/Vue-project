<template>
    <div class="main Router">
        <div class="markdown-body">
            <h2 style="text-align: center">关 于</h2>
            <h4>关于CNode</h4>
            <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
            <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
            <h4>关于项目</h4>
            <p>该项目是基于Cnode社区提供的的api，采用vue.js重写的webapp。</p>
            <h4>源码地址</h4>
            <p><a href="https://github.com/singingXY/Vue-project/tree/master/VueCNode">https://github.com/singingXY/Vue-project/tree/master/VueCNode</a></p>
            <p></p>
        </div>
    </div>
</template>

<script>
export default {
    
    created() {
        this.$store.commit('showSidebar', false);
    }
}
</script>

<style scoped>
    .markdown-body{
        padding: 10px 10px 30px;
        background: #fff;
        border-radius: 5px;
    }
</style>
