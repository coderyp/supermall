<template>
  <swiper>
      <swiper-item v-for="item in banners" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="homeImageLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'
export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {
      isImageLoad: false
    }
  },
  props: {
    banners: {
      type: Array,
      defalut () {
        return []
      }
    }
  },
  methods: {
    homeImageLoad () {
      if (!this.isImageLoad) {
        this.$emit('homeImageLoad')
        this.isImageLoad = true
      }      
    }
  }
}
</script>

<style>
</style>