<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="back">
        <img src="~assets/img/common/back.svg" alt="" >
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" 
          :key="item" class="titleItem"
          @click="itemClick(index)"
          :class="{active: currentIndex === index}">{{ item }}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    components: {
        NavBar
    },
    data () {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    computed: {
    },
    methods: {
      itemClick (index) {
        this.currentIndex = index
        this.$emit('titleClick', index)
      },
      back () {
        this.$router.back()
      }
    }
  }
</script>

<style >
  .title {
    display: flex;
    font-size: 15px;
  }
  .titleItem {
    flex: 1;
  }
  .active {
    color: var(--color-high-text)
  }
  .back img {
    margin-top: 12px;
  }
</style>