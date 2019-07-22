<template>
    <div class="main">
        <div class="list-type">
            <ul>
                <li>全部</li>
                <li>精华</li>
                <li>分享</li>
                <li>问答</li>
                <li>招聘</li>
            </ul>
        </div>
        <ul class="list">
            <li>
                <img class="avatar" src="https://avatars2.githubusercontent.com/u/227713?v=4&s=120" alt="">
                
                <p><span class="type">问答</span></p>
                <p class="title">Node 12 值得关注的新特性</p>
            </li>
        </ul>
        <div class="load-more">
            <span class="prev" @click="prev" v-show="page != 1">上一页</span>
            <span class="next" @click="next">下一页</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                fruitList:[]
            }
        },
        mounted() {
            let temp = {
                name:"苹果",
                price:90,
                unit:"斤"
            }
            this.fruitList.push(temp);
        }
    }
</script>
<style lang="less">
@import "../assets/less/list";
</style>
