<template>
    <div class="main">
        <div class="user-list">
            <div class="user-list-title">未读消息</div>
            <ul>
                <li v-for="msg in msg" :key="msg.id">
                     <router-link  :to="{name: 'user', params: {name: msg.author.loginname}}" v-if="msg.author.loginname">{{ msg.author.loginname }}</router-link>
                    <div v-if="msg.type == 'reply'">回复了你的话题 </div>
                    <div v-if="msg.type == 'at'">提到了你 </div>
                    <div v-html="msg.reply.content"></div>
                    <div class="msg-from">
                        来自 
                        <router-link  :to="{name: 'article', params: {id: msg.topic.id}}">
                        {{ msg.topic.title }}
                        </router-link>
                    </div>
                </li>
                <li v-if="msg == false">无消息</li>
            </ul>
        </div>
        <div class="user-list">
            <div class="user-list-title">过往的消息</div>
            <ul>
                <li v-for="oldMsg in oldMsg" :key="oldMsg.id">
                   
                     <router-link  :to="{name: 'user', params: {name: oldMsg.author.loginname}}" v-if="oldMsg.author.loginname">{{ oldMsg.author.loginname }}</router-link>
                    <div v-if="oldMsg.type == 'reply'">回复了你的话题 </div>
                    <div v-if="oldMsg.type == 'at'">提到了你 </div>
                    <div v-html="oldMsg.reply.content"></div>
                    <div class="msg-from">
                        来自 
                        <router-link  :to="{name: 'article', params: {id: oldMsg.topic.id}}">
                        {{ oldMsg.topic.title }}
                        </router-link>
                    </div>
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
             console.log( this.oldMsg);
             console.log(this.msg.type);
             console.log(this.oldMsg.type);
        });
    }
}
</script>

<style scoped>
.user-list li{
    padding: 10px;
}
</style>
