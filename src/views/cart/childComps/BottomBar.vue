<template>
  <div class="bottom-bar">
    <div class="select-all item">
      <check-button class="check-button" :is-checked="isSelectAll" @click.native="handleCheck" />
      <span>全选</span>
    </div>
    <div class="total-price item">
      <span>合计：￥{{totalPrice}}</span>
    </div>
    <div class="item calculate" @click="toCalculate">
      <span>去计算({{getCount}})</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CheckButton from 'components/content/check-button/CheckButton'

export default {
  name: 'BottomBar',
  data() {
    return {
    }
  },
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['totalPrice', 'getCount', 'isSelectAll', 'getList'])
  },
  methods: {
    handleCheck() {
      this.$store.commit('selectAll', this.isSelectAll)      
    },
    toCalculate() {
      if(this.getCount == 0) {
        this.$toast.show('请选择商品')
      }else {
        this.$toast.show('跳去付款页')
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    position: absolute;
    bottom: 52px;
    display: flex;
    align-items: center;
    height: 40px;
    width: 100%;
    background: #eee;
    
  }

  .item {
    flex: 1;
  }
  .select-all {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2;
  }

  .check-button {
    margin-right: 4px;
  }
  .total-price {
    flex: 3;
  }
  .calculate {
    flex: 2;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background: hsl(24, 100%, 50%);

  }
</style>