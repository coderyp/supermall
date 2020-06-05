<template>
  <div class="bottom-bar">
    <div class="left-bar bar-item">
      <div class="part">
        <i class="icon customer-service"></i>
        <div class="text">客服</div>
      </div>
      <div class="part">
        <i class="icon shop"></i>
        <div class="text">店铺</div>
      </div>
      <div class="part">
        <i class="icon collect"></i>
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="right-bar bar-item">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="purchase">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addCart () {
      this.$emit('addCart')
    }
  }
}
</script>

<style>
  .bottom-bar {
    height: 49px;
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    text-align: center;
  }
  .bottom-bar .bar-item {
    flex: 1;
    display: flex;
  }
  .bar-item > .part {
    flex: 1;
  }
  .bar-item > .part > .icon {
    width: 22px;
    height: 22px;
    display: block;
    margin: 4px auto;
    background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;    
  }
  .bar-item > .part > .customer-service {
    background-position-y: -54px;
  }
  .bar-item > .part > .shop {    
    background-position-y: -98px;
  }
  .right-bar > div {
    flex: 1;
    text-align: center;
    line-height: 49px;
  }
  .right-bar .cart {
    height: 49px;
    background-color: #fa0;
    color: #000;
  }

  .right-bar .purchase {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>