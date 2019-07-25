<template>
    <div class="main article">
        <div class="article-title">
            <h1>{{infos.title}}</h1>
            <p>
                <span>发布于 {{changeTime(infos.create_at)}}</span>
                <span>作者 {{infos.author.loginname}}</span>
                <span>{{infos.visit_count}}次浏览</span>
                <span>来自 {{infos.tab}}</span>
            </p>
        </div>
        <div class="article-content" v-html="infos.content">
            
        </div>
        <transition name="slide-left">
            <div class="back" @click.stop.prevent="$router.go(-1)"><</div>
        </transition>
    </div>
</template>
<script>
import common from '../common.js'
export default {
    name: '',
    data() {
        return {
            id: this.$route.params.id,
            infos: {}
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            this.$fetch(common.api + '/topic/' + this.id )
        
            .then((response) => {
                console.log(response);
                if(response.success){
                    // 填充数据
                    this.infos = response.data;
            console.log(this.infos.author.loginname);
                }
            })
        }
    }
}
</script>

<style lang="less" >
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
        }
        
    }
    .article-content{
        padding: 10px;
        border-top: 1px solid #e5e5e5;
        img{
            width: 100%;
        }
        a{
            color: #08c
        }
        p{
            margin: 1em 0;
            line-height: 1.7;
        }
        pre{
            font-size: 14px;
            padding: 0 15px;
            border: none;
            margin: 20px -10px;
            border-width: 1px 0;
            background: #f7f7f7;
            tab-size: 4;
            line-height: 22px;
            word-break: break-all;
            word-wrap: break-word;
            white-space: pre-wrap;
        }
    }
</style>