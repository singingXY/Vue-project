<template>
    <div class="main">
        
        <transition name="fade">
            <loading v-if="isLoading"></loading>
        </transition>
        <div class="user">
            <img :src="user.avatar_url" alt="">
            <div class="user-infos">
                <h3>{{user.loginname}}</h3>
                <p>积分 {{user.score}}</p>
                <p>收藏话题 {{collect.length}}</p>
                <p>注册时间 {{changeTime(user.create_at)}}</p>
            </div>
        </div>
        <div class="user-list">
            <div class="user-list-title">最近创建的话题</div>
            <ul>
                <li v-for="topic in topic" :key="topic.id">
                    <router-link :to="{ name: 'user', params: { loginname: topic.author.loginname}}">
                        <img class="avatar" :src="topic.author.avatar_url" :alt="topic.author.loginname">
                    </router-link>
                    <p class="title">
                        <router-link :to="{ name: 'article', params:{ id: topic.id }}">{{topic.title}}</router-link>
                    </p>
                    <p class="date"> {{changeTime(topic.last_reply_at)}}</p>
                </li>
                <li v-if="topic == false">无话题</li>
            </ul>
        </div>
        <div class="user-list">
            <div class="user-list-title">最近参与的话题</div>
            <ul>
                <li v-for="replies in replies" :key="replies.id">
                    <router-link :to="{ name: 'user', params: { loginname: replies.author.loginname}}">
                        <img class="avatar" :src="replies.author.avatar_url" :alt="replies.author.loginname">
                    </router-link>
                    <p class="title">
                        <router-link :to="{ name: 'article', params:{ id: replies.id }}">{{replies.title}}</router-link>
                    </p>
                    <p class="date"> {{changeTime(replies.last_reply_at)}}</p>
                </li>
                <li v-if="replies == false">无话题</li>
            </ul>
        </div>
        <div class="back" @click.stop.prevent="$router.go(-1)">
            <svg t="1564367329808" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6281" width="20" height="23"><path d="M769.405 977.483c-27.074 27.568-71.045 27.568-98.121 0l-416.591-423.804c-27.173-27.568-27.173-72.231 0-99.899l416.492-423.804c13.537-13.734 31.324-20.652 49.109-20.652s35.572 6.917 49.109 20.652c27.173 27.568 27.173 72.331 0 99.899l-367.482 373.806 367.482 373.904c27.074 27.568 27.074 72.231 0 99.899z" p-id="6282" fill="#ffffff"></path></svg>
        </div>
    </div>
</template>
<script>
import common from '../common.js'
import Loading from '@/components/loading.vue';
export default {
    name:'user',
    components: {
        Loading
    },
    data() {
        return {
            isLoading: true,
            loginname: this.$route.params.loginname,
            user: [],
            collect: [],
            topic: [],
            replies: []
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            this.$fetch(common.api + '/user/' + this.loginname )
        
            .then((response) => {
                this.isLoading = false;
                if(response.success){
                    this.user = response.data;
                    this.topic = this.user.recent_topics;
                    this.replies = this.user.recent_replies;
                }
            })
            .then(() => this.$fetch(common.api + '/topic_collect/' + this.loginname ))
            .then((collect) => {
                this.collect = collect.data;
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .user{
        display: flex;
        margin-top: 10px;
        padding: 20px;
        background: #fff;
        border-radius: 5px;
        img{
            width: 35%;
            height: 35%;
            max-width: 120px;
            max-height: 120px;
            margin-right: 30px;
            border-radius: 50%;
        }
        .user-infos{
            width: 70%;
            line-height: 1.8;
            h3{
                font-size: 22px;
            }
            p{
                color: #666;
                font-size: 14px;
            }
        }
    }
    .user-list{
        overflow: hidden;
        margin: 10px 0;
        background: #fff;
        border-radius: 5px;
        .user-list-title{
            padding: 10px;
            background-color: #f6f6f6;
            border-bottom: 1px solid #f0f0f0;
            text-align: center;
        }
        li{
            display: flex;
            justify-content: space-between;
            padding: 10px;
            height: 60px;
            font-size: 14px;
            border-bottom: 1px solid #f0f0f0;
            line-height: 40px;
            a{
                color: #666;
            }
        }
        .avatar{
            width: 40px;
            height: 40px;
            margin-right: 10px;
        }
        .title{
            width: 66%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .date{
            width: 70px;
            font-size: 14px;
            color: #999;
            text-align: right;
        }
    }
</style>
