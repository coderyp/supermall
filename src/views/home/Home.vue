<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control v-show="isFixed" @tabClick="tabClick" class="tab-control" :titles="titles" ref="tabControl1"/>
    <scroll class="content" 
    @scroll="contentScroll"
     @loadMore="loadMore" ref="scroll"
     :pull-up-load="true"
      :probe-type="3">
      <home-swiper :banners="banners" @homeImageLoad="homeImageLoad" />  
      <recommend-view :recommends="recommends" />
      <feature/>
      <tab-control @tabClick="tabClick" :titles="titles"  class="tab-control" ref="tabControl2"/>
      <goods-list :good-list="goodsType" />
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backTop" class="back-top" />
  </div>
</template>
<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import Feature from './childComps/Feature'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

import { getmultidata, getHomeGoods } from 'network/home'
import { debounce } from 'common/utils'
import { itemListenerMixin, backTopMixin } from 'common/mixin'
export default {
  name: 'Home',
  components: {
    HomeSwiper,
    RecommendView,
    Feature,
    NavBar,
    TabControl,
    GoodsList,
    Scroll
  },
  mixins: [itemListenerMixin, backTopMixin],
  data () {
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '新品', '精选'],
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []}
      },
      currentType: 'pop',
      offsetTop: 0,
      isFixed: false
    }
  },
  computed: {
    goodsType (){
      return this.goods[this.currentType].list
    }
  },
  created () {
    this.getmultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')    
  },
  mounted () {
    // 监听item中图片加载完成
    this.tabClick(0)
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)    
  },
  deactivated () {
    this.saveY = this.$refs.scroll.getScrollY()
    // 取消全局事件的监听
    this.$bus.$off('itemImgLoad', this.itemImglistener)
  },
  destroyed () {
    console.log('home destroyed')
  },
  methods: {
    /* 事件监听相关方法 */
    tabClick (index) {
      switch(index) {
        case 0: 
          this.currentType = 'pop'
          break
        case 1: 
          this.currentType = 'new'
          break
        case 2: 
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index

    },
    contentScroll (position) {
      
      this.isFixed = (-position.y) > this.offsetTop
      this.listenShow(position)
    },
    loadMore () {
      this.getHomeGoods(this.currentType)  
    },
    homeImageLoad() {
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop
    },
  /*
   * 网络请求相关方法
   */
    getmultidata () {
      getmultidata().then(res => {
        if (res.data)
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
      }, err => console.log(err))
    },
    getHomeGoods (type) {
      let page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        res && this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
      // 完成上拉加载更多
      this.$refs.scroll && this.$refs.scroll.finishPullUp()
    }
  }
}
</script>
<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
  .tab-control {
    position: relative;
    top: -1px;
    z-index: 9;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
</style>
