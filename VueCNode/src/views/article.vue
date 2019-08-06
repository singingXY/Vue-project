<template>
    
    <div class="main">
        <div class="article">
        <transition name="fade">
            <loading v-if="isLoading"></loading>
        </transition>
        <div class="article-title">
            <div class="collect" v-if="isLogin">
                <div class="collectBtn" v-if="is_collect" @click="deCollect">
                    <svg t="1564991406883" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1102" width="18" height="22"><path d="M752 939.2c-9.6 0-20.8-3.2-30.4-8l-208-104-209.6 104c-20.8 11.2-48 9.6-67.2-4.8-19.2-14.4-30.4-40-25.6-64l43.2-224L89.6 484.8C72 467.2 65.6 440 72 417.6c8-24 27.2-41.6 52.8-44.8l228.8-41.6 102.4-208c11.2-22.4 33.6-36.8 57.6-36.8s48 14.4 57.6 36.8l102.4 208 228.8 40c24 3.2 44.8 20.8 51.2 44.8 8 24 1.6 49.6-16 67.2L772.8 638.4l41.6 224c4.8 25.6-6.4 49.6-25.6 64-9.6 8-22.4 12.8-36.8 12.8z" fill="#F5CA04" p-id="1103" data-spm-anchor-id="a313x.7781069.0.i5" class="selected"></path></svg>
                    取消收藏
                </div>
                <div class="collectBtn" v-else @click="doCollect">
                    <svg t="1564990711497" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2575" width="18" height="22"><path d="M773.458 1005.43c-14.403 0-30.592-4.132-45.599-11.638L513.567 886.61 297.948 993.618c-13.655 7.27-29.286 11.09-45.225 11.09a96.164 96.164 0 0 1-57.549-18.842c-30.177-22.64-45.64-61.85-38.502-97.561l44.099-228.772L31.744 501.996a104.059 104.059 0 0 1-26.281-100.66l0.338-1.162c12.288-36.828 42.772-62.633 79.734-67.584l234.839-42.7L425.779 75.811c16.932-33.895 51.37-55.675 87.788-55.675 37.99 0 73.318 22.6 88.13 56.29l105.068 213.4L941.64 330.89a95.672 95.672 0 0 1 78.264 68.373 98.97 98.97 0 0 1-24.474 101.002l-0.578 0.579-168.55 158.72L868.9 888.745c6.86 36.649-7.716 73.672-38.062 96.742a90.409 90.409 0 0 1-57.38 19.943z m-259.81-196.055l227.667 113.853c6.686 3.37 14.392 5.489 19.665 5.489 8.116 0 15.652-2.499 21.187-7.117l1.03-0.85c12.937-9.707 19.245-25.134 16.414-40.238l-45.814-246.804 181.212-170.65c11.126-11.28 14.93-27.433 9.995-42.286l-0.497-1.562a37.31 37.31 0 0 0-30.971-27.003l-1.034-0.163L661.76 348.21 548.91 118.99c-5.478-12.805-20.347-22.098-35.359-22.098-14.75 0-28.861 9.236-36.009 23.496L365.414 348.109l-252.062 45.788c-15.31 1.92-27.203 12.088-32.697 27.945-3.901 14.49 0.722 31.949 11.372 42.834l181.422 169.057-47.61 246.933c-2.863 14.28 3.9 30.714 16.409 40.1 6.272 4.715 14.397 7.316 22.917 7.316 6.569 0 12.866-1.531 18.294-4.45l0.783-0.46 229.407-113.797z" p-id="2576"></path></svg>
                    收藏
                </div>
            </div>
            <h1>{{infos.title}}</h1>
            <p>
                <span>发布于 {{changeTime(infos.create_at)}}</span>
                <span v-if="infos.author">
                    作者 <router-link :to="{ name:'user', params:{ loginname:infos.author.loginname}}">{{infos.author.loginname}}</router-link>
                </span>
                <span>{{infos.visit_count}}次浏览</span>
                <span v-if="infos.tab">来自 {{types[infos.tab]}}</span>
                <span v-else>来自 暂无</span>
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
            types: { share: '分享', ask: '问答', job: '招聘', dev: '客户端测试'},
            infos: [],
            replies: [],
            is_collect: false,
            lSLogin: localStorage.getItem("isLogin")
        }
    },
    computed:{
        isLogin(){
            return this.$store.state.isLogin;
        }
    },
    mounted() {
        this.getData();
        document.documentElement.scrollTop = 1;
    },
    methods: {
        getData() {
            this.$fetch(common.api + '/topic/' + this.id, {
                accesstoken: this.lSLogin
            } )
            .then((response) => {
                this.isLoading = false;
                if(response.success){
                    // 填充数据
                    this.infos = response.data;
                    this.replies = this.infos.replies;
                    this.is_collect  = this.infos.is_collect;
                    console.log(this.infos);
                }
            })
        },
        doCollect(){
            this.$post(common.api + '/topic_collect/collect', {
                accesstoken: this.lSLogin,
                topic_id: this.id
            })
            .then((response) => {
                if(response.success){
                    this.is_collect  = true;
                }else{
                    alert("收藏失败");
                }
            })
        },
        deCollect(){
            this.$post(common.api + '/topic_collect/de_collect', {
                accesstoken: this.lSLogin,
                topic_id: this.id
            })
            .then((response) => {
                if(response.success){
                    this.is_collect  = false;
                }else{
                    alert("取消收藏失败");
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
        position: relative;
        padding: 10px;
        h1{
            margin: 8px 100px 8px 0;
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
        .collect{
            position: absolute;
            top: 20px;
            right: 10px;
            .collectBtn{
                width: 100px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                font-size: 15px;
                background: #f0f0f0;
                border-radius: 5px;
            }
            svg{
                vertical-align: text-bottom;
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