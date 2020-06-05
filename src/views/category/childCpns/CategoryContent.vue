<template>
  <div class="content">
    <div class="sub-category">
      <div class="item" v-for="(item, index) in subcategories" :key="index">
        <img :src="item.image" alt="" @load="imgLoad">
        <div>{{item.title}}</div>
      </div>
    </div>
    <!-- 详情 -->
    <div class="detail">
      <goods-list :good-list="categoryDetail"/>
    </div>
  </div>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList'
export default {
  name: 'CategoryContent',
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    subcategories: {
      type: Array,
      default() {
        return []
      }
    },
    categoryDetail: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsList
  },
  methods: {
    imgLoad () {
      this.$emit('itemLoad')
    }
  },
  updated() {
    this.categoryDetail = this.categoryDetail
  }
}
</script>

<style  scoped>
  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .sub-category {
    display: flex;
    flex-wrap: wrap;
    padding: 20rpx;
    margin-top: 30rpx;
  }

  .sub-category .item {
    width: 33.33%;
    text-align: center;
  }

  .sub-category .item img {
    width: 80%;
  }

  .sub-category .item view {
    font-size: 14px;
    margin: 15px 0;
  }

  .detail {
    /* width: 100%; */
  }
</style>