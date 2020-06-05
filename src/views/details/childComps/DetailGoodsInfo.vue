<template>
  <div class="good-info"  v-if="Object.keys(detailInfo).length !== 0">
    <div class="effect">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>

    <div v-for="(item, index) in detailInfo.detailImage" :key="index">
      <div class="info-key">{{ item.key }}</div>
      <div class="info-list">
        <img @load="iamgeLoad" :src="item" alt="" :key="index" v-for="(item, index) in item.list">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    iamgeLoad () {
      this.$emit('iamgeLoad')
    }
  }

}
</script>

<style scoped>
  .effect {
    margin: 20px 15px;
  }
  .start, .end {
    width: 100px;
    height: 1px;
    background-color: #5b5b5b;
    position: relative;
  }
  .end {
     float: right;
  }
  .start::before, .end::after {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    background-color: #000;
    position: absolute;
    bottom: 0;
  }
  .end::after {
    right: 0;
  }
  .desc {
    padding: 15px 0;
  }
  .good-info {
    border-top: 2px solid #eee;
    /* pointer-events: auto; */
  }
  .info-key {
    color: #000;
    margin: 10px 0;
    padding-left: 25px;
    font-size: 18px;
  }
  .good-info img {
    width: 100%;
  }
</style>>
