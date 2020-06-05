<template>
  <div class="cart">
    <!--  导航栏 -->
    <cart-nav-bar />

    <cart-list class="content" />
    
    <bottom-bar />
    
  </div>
</template>
<script>

import CartNavBar from './childComps/CartNavBar'
import CartList from './childComps/CartList'
import BottomBar from './childComps/BottomBar'

export default {
  name: 'Cart',
  components: {
    CartNavBar,
    CartList,
    BottomBar: BottomBar
  }
}

</script>
<style scoped>
  .cart {
    height: 100vh;
    /* background-color: #ddd; */
  }

  .content {
    height: calc(100% - 44px - 49px - 40px);
  }
</style>
