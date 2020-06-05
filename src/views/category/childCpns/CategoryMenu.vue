<template>
  <div class="menu">
    <template v-for="(item, index) in categories">
      <div class="item"  :class='{active: index == currentIndex}'
          @click="onItemClick"
          :data-index="index" :key="index">
        {{item.title}}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CategoryMenu',
  props: {
    categories:{
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    onItemClick(e) {
      // 1.改变当前的currentIndex
      const currentIndex = e.target.dataset.index
      this.currentIndex = currentIndex

      // 2.将最新的currentIndex传递到分类页面
      this.$emit('menuclick', currentIndex)
    }
  }
}
</script>

<style scoped>
  .menu {
  /* height: 100vh; */
  font-size: 14px;
  background: #f6f6f6;
  }

  .item {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  .active {
    color: #f55777;
    font-weight: 700;
    background: #fff;
    border-left: 3px solid #ff5777;
  }
</style>