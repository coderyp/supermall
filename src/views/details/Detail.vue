<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav" class="detail-navbar"/>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="scroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @iamgeLoad="imgLoad"/>
      <detail-goods-param ref="param" :good-params="goodsParam" />
      <detail-comment-info ref="comment"  :comment-info="commentInfo" />
      <goods-list ref="recommend"  :good-list="goodList" />
    </scroll>
    <back-top v-show="isShowBackTop" v-on:click.native="backTop" />
    <detail-bottom-bar @addCart="addCart" />
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailGoodsParam from './childComps/DetailGoodsParams'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
import { getDetail, getRecommend, Good, Shop, GoodsParam } from 'network/detail'

import { debounce } from 'common/utils.js'
import { itemListenerMixin, backTopMixin } from 'common/mixin'
import { BACK_POSITION } from 'common/const'

import {mapActions} from 'vuex'
export default {
  name: 'Detail',
  data () {
    return {
      iid: '',
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {},
      goodList: [],
      tothemeYs: [],
      getTopYs: null,
      currentIndex: 0
    }
  },
  mixins: [itemListenerMixin, backTopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    GoodsList,
    DetailGoodsInfo,
    DetailGoodsParam,
    DetailCommentInfo,
    DetailBottomBar
  },
  created () {
    // 获取iid
    this.iid = this.$route.params.iid
    //根据iid请求详情数据
    getDetail(this.iid).then( 
      res => {
        // console.log(res)
        const data = res && res.result
        if (data) {
          // 获取顶部轮播图图片
          this.topImages = data.itemInfo.topImages
          // 获取商品信息 创建对象，把数据整合到一个对象里
          this.goods = new Good(data.itemInfo, data.columns, data.shopInfo.services)
          // 获取店铺信息
          this.shop = new Shop(data.shopInfo)
          // 获取详情信息
          this.detailInfo = data.detailInfo
          // 获取GoodsParam商品参数
          this.goodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule)
          // 取出评论信息
          if (data.rate.cRate) {
            this.commentInfo = data.rate.list[0]
          }

          this.getTopYs = debounce( () => {
            this.tothemeYs = []
            this.tothemeYs.push(0)
            this.tothemeYs.push(this.$refs.param.$el.offsetTop)
            this.tothemeYs.push(this.$refs.comment.$el.offsetTop)
            this.tothemeYs.push(this.$refs.recommend.$el.offsetTop)
            this.tothemeYs.push(Number.MAX_VALUE)
            // console.log(this.tothemeYs)
          })
          // 第一次获取，值不对，
          // 原因： this.$refs.param.$el压根就没渲染

          this.$nextTick( () => {
            // 值不对：原因：图片没有计算在内
            // 根据最新的数据，对应的dom已经被渲染出来
            // 但是图片依旧没有加载完（目前获取到的offsetTop不包含其中的图片）
            // offsetTop值不对的时候，都是因为图片的问题
          })
        }
      }, err => console.log('请求失败')
      
    );
    getRecommend().then(res => {
      this.goodList = res && res.data.list
    }, err => console.log('请求失败')
    )
  },
  mounted () {
  },
  destroyed () {
    this.$bus.$off('itemImgLoad', this.itemImglistener)
  },
  methods: {
    ...mapActions({
      add: 'addCart'
    }),
    imgLoad () {
      this.getTopYs()
    },
    titleClick (index) {      
      this.$refs.scroll.scrollTo(0, -this.tothemeYs[index], 200 )
    },
    scroll (position) {
      let length = this.tothemeYs.length
      let positionY = - position.y
      for(let i = 0; i < length - 1; i ++) {
        if (this.currentIndex !== i && positionY >= this.tothemeYs[i]  && positionY < this.tothemeYs[i + 1] ) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = i
        }
      }
      this.listenShow(position)
    },
    addCart () {
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.detailInfo.desc
      product.price = this.goods.lowPrice
      product.iid = this.iid
      // this.$store.dispatch('addCart', product).then(res=> {
      // })
      this.add(product).then(res => {
        this.$toast.show(res, 1000)
      })
    }
  }
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-navbar {
    position: relative;
    z-index: 9;
  }

  .content {
    height: calc(100% - 44px - 49px);
  }
</style>