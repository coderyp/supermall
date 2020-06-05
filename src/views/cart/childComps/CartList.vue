<template>
  <div>
    <scroll class="content" ref="scroll"> 
      <cart-list-item v-for="(item, index) in list" :product="item" :key="index"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import CartListItem from './CartListItem'

import { mapGetters } from 'vuex'
export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters({
      list: 'getList'
    })
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .content {
    height: 100%;
  }
</style>