<template>
    <div class="main article">
        <div class="article-title">
            <h1>nodej 如何实现将二进制文件与SQLite数据库之间相互转换</h1>
            <p>
                <span>发布于 1年前</span>
                <span>作者 123</span>
                <span>1223 次浏览</span>
                <span>来自 废话</span>
            </p>
        </div>
        <div class="article-content"></div>
    </div>
</template>
<script>
export default {
    name: '',
    data() {
        return {
            id: this.$route.query.id
        }
    },
    methods: {
        getData() {
            this.$fetch(common.api + '/topics',{
                id: this.id, 
            })
            .then((response) => {
                console.log(response);
                if(response.success){
                    // 填充数据
                    this.list = response.data;
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .article-title{
        font-size: 22px;
    }
</style>