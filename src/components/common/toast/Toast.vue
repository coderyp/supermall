<template>
  <div class="toast" v-show="isShow">
    <div class="message">{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    data() {
      return {
        isShow: false,
        message: ''
      }
    },
    methods: {
      show(message='默认弹窗', duration=2000) {
        this.message = message
        this.isShow = true
        setTimeout(() => {
          this.message = ''
          this.isShow = false
        }, duration)
      }
    }
  }
</script>

<style>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
  }

  .message {
    background: rgba(0,0,0, .6);
    color: #fff;
    padding: 10px 12px;
    border-radius: 8px;
  }
</style>