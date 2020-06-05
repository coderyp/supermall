<template>
  <div class="wrapper" v-if="Object.keys(goods).length !== 0">
    <p class="title">{{ goods.title }}</p>
    <div class="priceInfo">
      <span :style="{color:goods.discountBgColor}" class="price">{{ goods.price }}</span>
      <span class="oldPrice">{{ goods.lowPrice }}</span>
      <span v-if="goods.discountDesc" class="price-desc">{{ goods.discountDesc }}</span>
    </div>
    <div class="column">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length-1].name }}</span>

    </div>
    <div class="ensure">
      <div v-for="(item, index) in goods.services.length-1" :key="index" class="ensure-item">
        <img :src="goods.services[item-1].icon" alt="" class="icon">
        <span>{{ goods.services[item-1].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBaseInfo',
    props: {
      goods: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    margin: 10px 5px;
  }
  .wrapper  .title {
    font-size: 18px;
    color: #3c3c3c;
  }
  .priceInfo {
    margin-top: 15px;
  }
  .price {
    font-size: 22px;
  }
  .oldPrice {
    text-decoration: line-through;
    margin-left: 5px;
  }
  .price-desc {
    margin-left: 5px;
    height: 25px;
    line-height: 25px;
    padding: 2px 5px;
    border-radius: 13px;
    color: #fff;
    background-color: var(--color-tint);
    text-align: center;
    position: relative;
    bottom: 8px;
  }
  .column {
    display: flex;
    justify-content: space-between;
    margin: 15px 0 5px;
  }
  .ensure {
    border-top: 2px solid #eee;
    border-bottom: 2px solid #eee;
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

  }
  .ensure .icon {
    width: 16px;
  }
  .ensure-item {
    /* flex-grow: 1; */
    color: #3c3c3c;

  }
</style>