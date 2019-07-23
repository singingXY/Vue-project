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
    import common from '../common.js'
    export default {
        data() {
            return{
                list: [],
                types: [],
                tab: "",
                page: 1,
                prev: 0,
                next: 0
            }
        },
        mounted() {
            // 设置默认页数
            this.page = parseInt(this.$route.query.page) || 1;
            // 设置默认分类
            this.tab = this.$route.query.tab;
            // 请求数据
            this.getData();
            // 设置默认头部分类
            this.types = [{
                text: "全部",
                value: ""
            }, {
                text: "精华",
                value: "good"
            }, {
                text: "分享",
                value: "share"
            }, {
                text: "招聘",
                value: "job"
            }, {
                text: "回答",
                value: "ask"
            }];
        },
        methods: {
            getData() {
                // common.ajaxGet(common.api + '/topics',{})
                // .then(res=>{
                //     console.log(res+"333");
                // })
                // console.log(common.response.data);
                this.$fetch(common.api + '/topics',{})
                .then((response) => {
                    console.log(response)
                })
            }
        }
    }
</script>
<style lang="less">
@import "../assets/less/list";
</style>
