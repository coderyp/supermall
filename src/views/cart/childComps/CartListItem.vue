<template>
  <div id="shop-item">
    <div class="select">
      <check-button :is-checked="product.checked" @click.native="handleCheck" />
    </div>
    <div class="item-img">
      <img :src="product.image" alt="">      
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="price">￥{{product.price}}</div>
        <div class="count">×{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/check-button/CheckButton'
import Vue from 'vue'
export default {
  name: 'CartListItem',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    handleCheck(e) {
      this.$store.commit('changeChecked', this.product)
    }
  }
}
</script>

<style>

  #shop-item {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #aaa;
    padding: 10px 4px;
    justify-content: space-between;
  }

  .select {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-img img {
    width: 80px;
    height: 110px;
    border-radius: 6px;
  }

  .item-info {
    width: 250px;
    padding: 0 10px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }

  .item-title, .item-desc {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .item-title {
    color: #000;
    font-size: 18px;
  }

  .item-desc {
    margin: 20px 0;
  }
  
  .info-bottom {
    display: flex;
    justify-content: space-between;
  }

  .info-bottom .price {
    color: #f00;
  }
  
  .info-bottom .count {
    color: #000;
    font-size: 20px;
  }
</style>