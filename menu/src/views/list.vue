<template>
    <div class="main">
        <div class="list-type">
            <ul>
                <li :class="{'active':tab===type.value}" v-for="type in types" @click="onTabSelect(type.value)" :key="type.value">{{type.text}}</li>
            </ul>
        </div>
        
        <transition name="fade">
            <loading v-if="isLoading"></loading>
        </transition>
        <ul class="list">
            <li v-for="list in list" :key="list.id">
                <router-link :to="{ name: 'user', params: { loginname: list.author.loginname}}">
                    <img class="avatar" :src="list.author.avatar_url" :alt="list.author.loginname">
                </router-link>
                <p>
                    <span class="type" :class="{'typegood': list.good}" v-if="list.tab">{{list.tab | getType}}</span>
                    <span class="type typetop" v-if="list.top">置顶</span>
                    </p>
                <p class="title">
                    <router-link :to="{ name: 'article', params:{ id: list.id }}">{{list.title}}</router-link>
                </p>
                <p class="count"><span>{{list.reply_count}}</span>/{{list.visit_count}}</p>
                <p class="date"> {{changeTime(list.last_reply_at)}}</p>
            </li>
        </ul>
        <div class="load-more" v-if="isLoading == false">
            <span class="prev" @click="prev" v-show="page != 1">上一页</span>
            <span class="next" @click="next">下一页</span>
        </div>
    </div>
</template>

<script>
    import common from '../common.js'
    import Loading from '@/components/loading.vue';
    export default {
        name: 'index',
        components: {
            Loading
        },
        data() {
            return{
                isLoading: true,
                list: [],
                types: [],
                tab: "",
                page: 1
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
                text: "问答",
                value: "ask"
            }];
        },
        methods: {
            getData() {
                this.isLoading = true;
                this.$fetch(common.api + '/topics',{
                    page: this.page, // 页数
                    tab: this.tab // 分类
                })
                .then((response) => {
                    //console.log(response);
                    this.isLoading = false;
                    if(response.success){
                        // 填充数据
                        this.list = response.data;
                    }
                })
            },
            prev() {
                this.page--;
                //改变路由
                let query = {
                    page: this.page
                }
                if (this.tab) {
                    query.tab = this.tab;
                }
                this.$router.push({
                    path: 'list',
                    query: query
                })
            },
            next() {
                this.page++;
                //改变路由
                let query = {
                    page: this.page
                }

                if (this.tab) {
                    query.tab = this.tab;
                }
                this.$router.push({
                    path: 'list',
                    query: query
                })
            },
            onTabSelect(type){
                this.tab = type;
                this.page = 1;
                //改变路由
                let query = {
                    page: this.page
                }
                if (this.tab) {
                    query.tab = this.tab;
                }
                this.$router.push({
                    path: 'list',
                    query: query
                })
            }
        },
        watch: {
            $route(){
                //检测路由变化
                this.page = this.$route.query.page || 1;
                this.tab = this.$route.query.tab;

                //获取数据
                this.getData();
                document.documentElement.scrollTop = 1;
            }
        },
        filters: {
            //把type返回为中文
            getType(value) {
                let result = value;
                switch (value) {
                    case "job":
                        result = "招聘";
                        break;
                    case "good":
                        result = "精华";
                        break;
                    case "share":
                        result = "分享";
                        break;
                    case "ask":
                        result = "问答";
                        break;
                    default:
                        result = "全部"
                        break;
                }
                return result;
            }
        }
    }
</script>
<style lang="less" scoped>
@import "../assets/less/list";
    .loading{
        margin-top: 60px;
    }
</style>
