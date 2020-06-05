<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for=" (item, index) in titles"
     :class="{active: index === currentIndex}"
     @click="tabClick(index)" :key="item">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  computed: {
    isActive () {
      return true;
    }
  },
  methods: {
    tabClick (index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style>
  .tab-control {
    display: flex;  
    background-color: #fff;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }

  .tab-control-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);    
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active span {
    border-bottom: 2px solid var(--color-tint);
  }
</style>