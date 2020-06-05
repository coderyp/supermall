<template>
  <div>
    <div class="shop-name">
      <img :src="shop.shopLogo" alt="" class="shopLogo">
      <span class="shop-text">{{ shop.shopName }}</span>
    </div>
    <div class="shop-desc">
      <div>
        <span class="sells">{{ shop.cSells }}</span>
        <div>总销量</div>
      </div>
      <div class="info-good">
        <span class="goods-count">{{ shop.cGoods }}</span>
        <div>全部宝贝</div>
      </div>
      <div class="desc">
        <table>
          <tr v-for="(item, index) in shop.score"  :key="index">
            <td>{{ item.name }}</td>
            <td  class="worse" :class="{better: item.isBetter}">{{ item.score }}</td>
            <td class="bad-bg" :class="{'good-bg': item.isBetter}">{{ item.isBetter? '高' : '低' }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="into">
      <span class="into-shop">进店逛逛</span>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
  .shop-name {
    margin-left: 10px;
  }
  .shop-name img {
    width: 65px;
    border-radius: 50%;
  }
  .shop-name .shop-text {
    font-size: 22px;
    position: relative;
    bottom: 23px;
    margin-left: 20px;
  }
  .shop-desc {
    font-size: 20px;
    color: #3c3c3c;
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin: 20px 0;
  }
  .sells, .goods-count {
    font-weight: 900;
  }
  .info-good {
    padding-right: 20px;
    border-right: 1px solid #666;
  }
  .desc .better {
    color: rgb(197, 19, 19);
  }
  .worse {
    color: rgb(27, 88, 11);
  }
  .bad-bg {
    color: #fff;
    background-color: rgb(27, 88, 11)
  }
  .good-bg {
    color: #fff;
    background-color: rgb(197, 19, 19);
  }
  .into {
    text-align:center;
    margin-bottom: 15px;
  }
  .into-shop {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    width: 160px;
    border-radius: 15px;
    background: #eee;
    text-align: center;
  }
</style>