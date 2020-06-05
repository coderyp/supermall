<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      bs: null
    }
  },
  props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
  },
  mounted () {
    this.bs = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    })
    // 监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.bs.on('scroll', (position) => {
        this.$emit('scroll', position)        
      })
    }
    // 监听上拉事件
    if (this.pullUpLoad) {
      this.bs.on('pullingUp', () => {
        this.$emit('loadMore')
      })
    }
  },
  methods: {
    scrollTo (x, y = 0, time = 300) {
      this.bs && this.bs.scrollTo(x, y, time)
    },
    // 封装refresh方法
    refresh () {
      this.bs && this.bs.refresh()
      console.log('==========')
    },
    finishPullUp () {
      this.bs && this.bs.finishPullUp()
    },
    getScrollY () {
      return this.bs ? this.bs.y : 0
    }
  }
}
</script>

<style>
  .wrapper {
    overflow: hidden;
  }
</style>