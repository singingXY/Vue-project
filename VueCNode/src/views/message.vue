<template>
    <div class="main">
        <div class="user-list">
            <div class="user-list-title">未读消息</div>
            <ul>
                <li v-for="notReadMsg in notReadMsg" :key="notReadMsg.id">
                    
                </li>
                <li v-if="notReadMsg == false">无消息</li>
            </ul>
        </div>
        <div class="user-list">
            <div class="user-list-title">过往的消息</div>
            <ul>
                <li v-for="readMsg in readMsg" :key="readMsg.id">
                   
                </li>
                <li v-if="readMsg == false">无消息</li>
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
            readMsg: [],
            notReadMsg: [],
            message: {
            has_read_messages: [],
            hasnot_read_messages: [{
                id: "543fb7abae523bbc80412b26",
                type: "at",
                has_read: false,
                author: {
                loginname: "alsotang",
                avatar_url: "https://avatars.githubusercontent.com/u/1147375?v=2"
                },
                message: {
                id: "542d6ecb9ecb3db94b2b3d0f",
                title: "adfadfadfasdf",
                last_reply_at: "2014-10-18T07:47:22.563Z"
                },
                reply: {
                id: "543fb7abae523bbc80412b24",
                content: "[@alsotang](/user/alsotang) 哈哈",
                ups: [ ],
                create_at: "2014-10-16T12:18:51.566Z"
                }
            }]
            }
        }
    },
    mounted() {
        // this.$fetch(common.api + '/messages', {
        //     accesstoken: this.lSLogin
        // })
        // .then((result) => {
        //      this.message = result.data.message;
        // });
        this.readMsg = this.message.has_read_messages;
        this.notReadMsg = this.message.hasnot_read_messages;
        console.log(this.message);
        console.log(this.readMsg);
        console.log(this.notReadMsg);
    }
}
</script>

<style scoped>
.user-list li{
    padding: 10px;
}
</style>
