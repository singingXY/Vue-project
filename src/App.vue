<template>
  <div id="app">
    <VHeader></VHeader>
    <transition :name="transitionName">
      <router-view class="Router"></router-view>
    </transition>
    <transition name="slide-fade">
      <div class="backtotop"
           v-show="isScrollTop">
        <i @click="scrollToTop">
          <svg t="1564122083435"
               class="icon"
               viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="13586"
               width="500"
               height="500">
            <path d="M415.402667 621.141333c-13.226667 0-23.978667-10.752-23.978667-23.978666V443.733333c0-127.914667 57.856-181.674667 120.576-226.730666C581.632 266.154667 632.576 315.904 632.576 443.733333v153.429334c0 13.226667-10.752 23.978667-23.978667 23.978666H415.402667z"
                  fill="#b9f4b6"
                  p-id="13587"
                  data-spm-anchor-id="a313x.7781069.0.i2"
                  class />
            <path d="M856.661333 541.269333l-118.101333-78.165333V443.733333c0-157.952-128.597333-284.16-183.893333-331.093333a65.6896 65.6896 0 0 0-85.333334 0C414.037333 159.658667 285.44 285.781333 285.44 443.733333v19.285334l-118.101333 78.250666a65.9456 65.9456 0 0 0-29.610667 55.04v64.768c0 36.437333 29.610667 66.048 66.048 66.048H819.968c36.437333 0 66.048-29.610667 66.048-66.048v-64.768c0.170667-22.186667-10.837333-42.752-29.354667-55.04zM285.44 658.858667h-79.445333v-61.354667l79.445333-52.565333v113.92z m68.266667 0V443.733333c0-128.085333 109.482667-236.032 158.293333-277.76 48.810667 41.728 157.952 149.418667 158.293333 277.248V658.773333l-316.586666 0.085334z m464.213333 0h-79.36V544.938667l79.36 52.565333v61.354667z"
                  fill="#333C4F"
                  p-id="13588"
                  data-spm-anchor-id="a313x.7781069.0.i9"
                  class="selected" />
            <path d="M513.194667 505.6c-54.016 0-97.962667-43.946667-97.962667-97.962667s43.946667-97.962667 97.962667-97.962666 97.962667 43.946667 97.962666 97.962666-43.946667 97.962667-97.962666 97.962667z m0-127.744c-16.384 0-29.696 13.312-29.696 29.696s13.312 29.696 29.696 29.696 29.696-13.312 29.696-29.696-13.312-29.696-29.696-29.696zM512 927.061333c-17.578667 0-31.914667-14.336-31.914667-31.914666V767.402667c0-17.578667 14.336-31.914667 31.914667-31.914667 17.578667 0 31.914667 14.336 31.914667 31.914667v127.744c0 17.493333-14.336 31.914667-31.914667 31.914666zM386.304 876.458667c-17.578667 0-31.914667-14.336-31.914667-31.914667v-52.224c0-17.578667 14.336-31.914667 31.914667-31.914667 17.578667 0 31.914667 14.336 31.914667 31.914667v52.224c0 17.493333-14.336 31.914667-31.914667 31.914667zM637.696 876.458667c-17.578667 0-31.914667-14.336-31.914667-31.914667v-52.224c0-17.578667 14.336-31.914667 31.914667-31.914667 17.578667 0 31.914667 14.336 31.914667 31.914667v52.224c0.085333 17.493333-14.336 31.914667-31.914667 31.914667z"
                  fill="#333C4F"
                  p-id="13589"
                  data-spm-anchor-id="a313x.7781069.0.i10"
                  class="selected" />
          </svg>
        </i>
      </div>
    </transition>
  </div>
</template>
<script>
import VHeader from '@/components/header.vue'
export default {
  name: 'app',
  components: {
    VHeader
  },
  data () {
    return {
      // 定义滚动条默认位置
      scrollTop: null,
      // 定义按钮默认状态
      isScrollTop: false,
      // 默认动态路由变化为slide-right
      transitionName: 'slide-right'
    }
  },
  props: {
    el: String
  },
  mounted () {
    // 监听滚动事件
    window.addEventListener(
      'scroll',
      () => {
        this.scrollTop =
          document.documentElement.scrollTop ||
          window.pageYOffset ||
          document.body.scrollTop ||
          document.querySelector(this.el).scrollTop

        // 控制滚动按钮的隐藏或显示
        if (this.scrollTop > 200) {
          this.isScrollTop = true
        } else {
          this.isScrollTop = false
        }
      },
      true
    )
    // 载入后移除全屏加载
    try {
      document.body.removeChild(document.getElementById('Loading'))
      setTimeout(function () {
        document.getElementById('app').style.display = 'block'
      }, 500)
    } catch (e) { }
  },
  methods: {
    scrollToTop () {
      let $this = this

      // 返回顶部动画特效
      setTimeout(function animation () {
        if ($this.scrollTop > 1) {
          setTimeout(() => {
            // 步进速度
            $this.scrollTop = $this.scrollTop - 30

            // 返回顶部
            if (document.documentElement.scrollTop > 1) {
              document.documentElement.scrollTop = $this.scrollTop - 30
            } else if (window.pageYOffset > 1) {
              window.pageYOffset = $this.scrollTop - 30
            } else if (document.body.scrollTop > 1) {
              document.body.scrollTop = $this.scrollTop - 30
            } else if (document.querySelector($this.el).scrollTop) {
              document.querySelector($this.el).scrollTop = $this.scrollTop - 30
            }
            animation()
          }, 1)
        }
      }, 1)
    }
  },
  watch: {
    $route (to, from) {
      if (to.name === 'article' || to.name === 'user' || to.name === 'collect') {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
    }
  }
}
</script>
<style lang="less">
@import "../src/assets/less/list";
.loading {
  margin-top: 20px;
}
</style>
