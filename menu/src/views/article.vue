<template>
    <div class="main article">
        <div class="article-title">
            <h1>{{infos.title}}</h1>
            <p>
                <span>发布于 {{changeTime(infos.create_at)}}</span>
                <span v-if="infos.author">作者 {{infos.author.loginname}}</span>
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
                    <img class="reply-avatar" :src="replies.author.avatar_url" :alt="replies.author.loginname">
                    <div class="reply-conten">
                        <p class="reply-author">{{replies.author.loginname}} {{changeTime(replies.create_at)}}</p>
                        <div v-html="replies.content"></div>
                        <div class="ups"><span>♥ </span>{{replies.ups.length}}</div>
                        <div class="floor">{{index + 1}}楼</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="back" @click.stop.prevent="$router.go(-1)">《</div>
        
    </div>
</template>
<script>
import common from '../common.js'
export default {
    name: 'articleDetail',
    data() {
        return {
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
            }
        }

    }
</style>