<template>
  <div class="main">
    <transition name="fade">
      <loading v-if="isLoading"></loading>
    </transition>
    <div class="user">
      <img :src="user.avatar_url"
           alt />
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
        <li v-for="topic in topic"
            :key="topic.id">
          <router-link :to="{ name: 'user', params: { loginname: topic.author.loginname}}">
            <img class="avatar"
                 :src="topic.author.avatar_url"
                 :alt="topic.author.loginname" />
          </router-link>
          <p class="title">
            <router-link :to="{ name: 'article', params:{ id: topic.id }}">{{topic.title}}</router-link>
          </p>
          <p class="date">{{changeTime(topic.last_reply_at)}}</p>
        </li>
        <li v-if="topic == false">无话题</li>
      </ul>
    </div>
    <div class="user-list">
      <div class="user-list-title">最近参与的话题</div>
      <ul>
        <li v-for="replies in replies"
            :key="replies.id">
          <router-link :to="{ name: 'user', params: { loginname: replies.author.loginname}}">
            <img class="avatar"
                 :src="replies.author.avatar_url"
                 :alt="replies.author.loginname" />
          </router-link>
          <p class="title">
            <router-link :to="{ name: 'article', params:{ id: replies.id }}">{{replies.title}}</router-link>
          </p>
          <p class="date">{{changeTime(replies.last_reply_at)}}</p>
        </li>
        <li v-if="replies == false">无话题</li>
      </ul>
    </div>
  </div>
</template>
<script>
import common from '../common.js'
import Loading from '@/components/loading.vue'
export default {
  name: 'user',
  components: {
    Loading
  },
  data () {
    return {
      isLoading: true,
      loginname: this.$route.params.loginname,
      user: [],
      collect: [],
      topic: [],
      replies: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$fetch(common.api + '/user/' + this.loginname)

        .then(response => {
          this.isLoading = false
          if (response.success) {
            this.user = response.data
            this.topic = this.user.recent_topics
            this.replies = this.user.recent_replies
          }
        })
        .then(() =>
          this.$fetch(common.api + '/topic_collect/' + this.loginname)
        )
        .then(collect => {
          this.collect = collect.data
        })
    }
  }
}
</script>

<style lang="less" scoped>
.user {
  display: flex;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  img {
    width: 35%;
    height: 35%;
    max-width: 120px;
    max-height: 120px;
    margin-right: 30px;
    border-radius: 50%;
    background: #f0f0f0;
  }
  .user-infos {
    width: 70%;
    line-height: 1.8;
    h3 {
      font-size: 22px;
    }
    p {
      color: #666;
      font-size: 14px;
    }
  }
}
.user-list {
  li {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    height: 60px;
    font-size: 14px;
    border-bottom: 1px solid #f0f0f0;
    line-height: 40px;
    a {
      color: #666;
    }
  }
  .avatar {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    background: #f0f0f0;
  }
  .title {
    width: 66%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .date {
    width: 70px;
    font-size: 14px;
    color: #999;
    text-align: right;
  }
}
</style>
