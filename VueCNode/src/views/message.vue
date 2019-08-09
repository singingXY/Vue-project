<template>
    <div class="main">
        <div class="user-list">
            <div class="user-list-title">未读消息</div>
            <ul>
                <li v-for="msg in msg" :key="msg.id">
                    <router-link  :to="{name: 'user', params: {loginname: msg.author.loginname}}">{{ msg.author.loginname }}</router-link>
                    <span v-if="msg.type == 'reply'">回复了你的话题 </span>
                    <span v-if="msg.type == 'at'">提到了你 </span>
                    <router-link  :to="{name: 'article', params: {id: msg.topic.id}}">
                    {{ msg.topic.title }}
                    </router-link>
                    <span v-if="msg.type == 'at'">&nbsp;中@了你</span>
                    <span class="date">{{changeTime(msg.create_at)}}</span>
                    <div v-html="msg.reply.content" class="msg-con markdown-body"></div>
                </li>
                <li v-if="msg == false">无消息</li>
            </ul>
        </div>
        <div class="user-list">
            <div class="user-list-title">过往的消息</div>
            <ul>
                <li v-for="oldMsg in oldMsg" :key="oldMsg.id" >
                    <router-link  :to="{name: 'user', params: {loginname: oldMsg.author.loginname}}">{{ oldMsg.author.loginname }}&nbsp;</router-link>
                    <span v-if="oldMsg.type == 'reply'">回复了你的话题&nbsp;</span>
                    <span v-if="oldMsg.type == 'at'">在话题&nbsp;</span>
                    <!-- <router-link  :to="{name: 'article', params: {id: oldMsg.topic.id}}" >
                        {{ oldMsg.topic.title }}
                    </router-link> -->
                    <router-link :to="{ path: '/topic/' + oldMsg.topic.id, query: { replyId: oldMsg.reply.id }}">
                        {{ oldMsg.topic.title }}
                    </router-link>
                    <span v-if="oldMsg.type == 'at'">&nbsp;中@了你</span>
                    <span class="date">{{changeTime(oldMsg.create_at)}}</span>
                </li>
                <li v-if="oldMsg == false">无消息</li>
            </ul>
        </div>
    </div>
</template>

<script>
import common from '../common.js'
export default {
    name: 'message',
    data() {
        return {
            lSLogin: localStorage.getItem("isLogin"),
            msg: [],
            oldMsg: [],
            message: []
        }
    },
    mounted() {
        this.$fetch(common.api + '/messages', {
            accesstoken: this.lSLogin
        })
        .then((result) => {
             this.message = result.data;
             this.oldMsg = this.message.has_read_messages;
             this.msg = this.message.hasnot_read_messages;
             //console.log( this.oldMsg);
        });
    }
}
</script>

<style lang="less" scoped>
.user-list{
    li{
        padding: 10px;
        font-size: 14px;
        border-bottom: solid 1px #f0f0f0;
        .date{
            float: right;
            color: #666;
        }
    }
}
.msg-con{
    padding: 5px;
    margin: 5px 0;
    background: #fbfbfb;
    border: solid 1px #e6e6e6;
    border-radius: 5px;
}

</style>
