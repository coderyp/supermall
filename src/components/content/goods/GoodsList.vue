<template>
  <div class="goods">
    <good-list-item  v-for="item in goodList"  :key="item.iid" :good-item="item"/>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'
export default {
  props: {
    goodList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodListItem
  }
}
</script>

<style>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 4px;
    /* column-count: 2;
    column-gap: 5px; */
  }
</style>