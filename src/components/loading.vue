<template>
  <div class="loading">
    <div class="three-bounce">
      <div class="one"></div>
      <div class="two"></div>
      <div class="three"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading' // 定义的组件名称 使用时写法：loading
}
</script>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
}
.three-bounce {
  display: inline-block;
  text-align: center;
  position: relative;
  top: 0;
  width: 80px;
}
.three-bounce > div {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: #666;
  animation: bouncedelay 1.4s infinite ease-in-out both;
}
.three-bounce .one {
  animation-delay: -0.32s;
}
.three-bounce .two {
  animation-delay: -0.16s;
}
@keyframes bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
