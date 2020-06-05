<template>
  <div class="user-comment" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header">
      <span class="header-title">用户评价</span>
      <span class="header-more">更多</span>
    </div>
    <div class="user-info">
      <img :src="commentInfo.user.avatar" alt="">
      <span class="user-name">{{ commentInfo.user.uname }}</span>
      <p class="comment-info">{{ commentInfo.content }}</p>
      <div>
        <span class="create-time">{{ commentInfo.created | showDate }}</span>
        <span class="style">{{ commentInfo.style }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { dateFormat } from 'common/utils.js'
export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    showDate (value) {
      const date =  new Date(value * 1000)
      return dateFormat(date, 'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>

<style>
  .user-comment {
    padding: 20px 15px;    
  }
  .info-header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    border-bottom: 1px solid #aaa;
  }
  .header-more {
    color: #111;
  }

  .user-info {
    margin-top: 15px;
  }

  .user-info .user-name {
    padding-left: 15px;    
    position: relative;
    bottom: 15px;
  }
  .user-info img {
    width: 50px;
    height: 50px;
  }
  .user-name {
    font-size: 25px;
  }

  .comment-info {
    margin: 15px 0;
  }

  .create-time {
    margin-right: 10px;
  }
</style>