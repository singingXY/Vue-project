<template>
    
    <div class="main article">
        
        <transition name="fade">
            <loading v-if="isLoading"></loading>
        </transition>
        <div class="article-title">
            <h1>{{infos.title}}</h1>
            <p>
                <span>发布于 {{changeTime(infos.create_at)}}</span>
                <span v-if="infos.author">
                    作者 <router-link :to="{ name:'user', params:{ loginname:infos.author.loginname}}">{{infos.author.loginname}}</router-link>
                </span>
                <span>{{infos.visit_count}}次浏览</span>
                <span>来自 {{types[infos.tab]}}</span>
            </p>
        </div>
        <div class="article-content" v-html="infos.content"></div>
        <div class="replies">
            <div class="replies-title">
                回复 [{{infos.reply_count}}]
            </div>
            <div class="reply" v-for="(replies, index) in replies" :key="replies.id">
                <div class="reply-item">
                    <router-link :to="{ name:'user', params:{ loginname:replies.author.loginname}}">
                        <img class="reply-avatar" :src="replies.author.avatar_url" :alt="replies.author.loginname">
                    </router-link>
                    <div class="reply-conten">
                        <p class="reply-author">
                            <router-link :to="{ name:'user', params:{ loginname:replies.author.loginname}}">
                                {{replies.author.loginname}} 
                            </router-link>
                            {{changeTime(replies.create_at)}}
                        </p>
                        <div v-html="replies.content"></div>
                        <div class="ups" v-if="replies.ups.length>0">
                            <svg t="1564368114755" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2669" width="14" height="14"><path d="M1000.59 407.182c-26.679-43.859-67.358-67.449-120.938-70.119-3.23-0.38-6.32-0.57-9.32-0.57l-172.356-0.59c7.819-34.839 11.979-70.079 11.979-102.798 0-33.489-3.66-67.259-10.89-100.388a41.025 41.025 0 0 0-2.36-7.35c-18.68-68.139-79.099-115.118-149.337-115.118-83.269 0-146.058 68.279-146.058 158.817l-0.061 2.28c-0.08 2.39-0.17 5.46 0.01 9.02-3.569 94.348-81.148 176.707-177.807 188.767l-136.178 2.19c-2.24-0.2-4.48-0.3-6.72-0.3-44.209 0-80.178 36.369-80.178 81.039l-0.37 481.182c0 44.369 35.989 80.479 80.229 80.479l149.368 0.03h0.08l567.93-0.98h0.011c31.429 0 51.139-8.8 74.589-24.02a158.319 158.319 0 0 0 54.589-60.578c4.33-6.98 7.55-14.44 9.59-22.22 0.13-0.511 0.26-1.021 0.37-1.521l84.648-381.714a81.977 81.977 0 0 0 2.33-22.699c1.82-32.89-6.16-64.939-23.15-92.839zM82.305 453.161c1.24 0.1 2.49 0.14 3.73 0.12l98.918-1.6v480.142l-103.028-0.02 0.38-478.642z m859.257 51.259l-84.419 380.673h-0.02a39.79 39.79 0 0 0-2.71 4.7c-6.15 12.5-15.2 22.699-26.84 30.27-14.989 9.729-19.319 10.79-30.369 10.79h-0.011l-530.321 0.915V444.231c122.238-30.1 212.877-137.708 216.337-263.466 0.05-1.68 0.03-2.8-0.13-4.48-0.021-0.78 0.02-1.56 0.05-2.35 0.05-1.61 0.09-3.23 0.09-4.87 0-38.22 22.04-76.899 64.149-76.899 34.129 0 63.408 24.02 71.208 58.399 0.44 1.92 1.011 3.78 1.7 5.57 5.15 25.48 7.76 51.339 7.76 76.969 0 40.479-8.31 87.989-22.789 130.318a40.914 40.914 0 0 0 5.39 37.02 40.906 40.906 0 0 0 33.22 17.2l226.506 0.81c1.36 0.19 2.72 0.31 4.09 0.37 26.83 1.1 43.63 10.34 56.159 30.949 8.561 14.06 12.45 30.35 11.25 47.109-0.15 2.02-0.12 4.12 0.04 6.14-0.121 0.47-0.241 0.93-0.34 1.4z" fill="#ff3838" p-id="2670"></path></svg> 
                            {{replies.ups.length}}
                        </div>
                        <div class="floor">{{index + 1}}楼</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import common from '../common.js'
import Loading from '@/components/loading.vue';
export default {
    name: 'articleDetail',
    components: {
        Loading
    },
    data() {
        return {
            isLoading: true,
            id: this.$route.params.id,
            types: { share: '分享', ask: '问答', job: '招聘'},
            infos: [],
            replies: []
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            this.$fetch(common.api + '/topic/' + this.id )
        
            .then((response) => {
                this.isLoading = false;
                if(response.success){
                    // 填充数据
                    this.infos = response.data;
                    this.replies = this.infos.replies;
                    console.log(this.replies);
                }
            })
        }
    }
}
</script>

<style lang="less" >
    
    img{
        width: 100%;
    }
    a{
        color: #08c
    }
    .article{
        background: #fff;
        border-radius: 5px;
    }
    .article-title{
        padding: 10px;
        h1{
            margin: 8px 0;
            font-size: 22px;
        }
        p{
            font-size: 14px;
            color: #888;
            span{
                display: inline-block;
                margin: 0 5px;
            }
        }
        
    }
    .article-content{
        padding: 10px;
        border-top: 1px solid #e5e5e5;
        p{
            margin: 1em 0;
            line-height: 1.7;
        }
        pre{
            font-size: 14px;
            padding: 0 15px;
            border: none;
            margin: 20px 0;
            border-width: 1px 0;
            background: #f7f7f7;
            tab-size: 4;
            line-height: 22px;
            word-break: break-all;
            word-wrap: break-word;
            white-space: pre-wrap;
        }
    }
    .replies{
        border-top: 5px solid #e1e1e1;
    }
    .replies-title{
        padding: 10px;
    }
    .reply-item{
        display: flex;
        position: relative;
        padding: 10px;
        border-bottom: 1px solid #f0f0f0;
        .reply-avatar{
            float: left;
            width: 50px;
            height: 50px;
        }
        .reply-conten{
            flex: 1;
            margin-left: 10px;
            .reply-author{
                margin-bottom: 5px;
                font-size: 12px;
                font-weight: 700;
                color: #666;
            }
            .floor{
                position: absolute;
                top: 10px;
                left: 90%;
                font-size: 12px;
                color: #999;
            }
            .ups{
                position: absolute;
                top: 10px;
                left: 80%;
                color: #ff3838;
                font-size: 12px;
                svg{
                    vertical-align: text-top;
                }
            }
        }

    }
</style>