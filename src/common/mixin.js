import { debounce } from './utils'
import BackTop from 'components/content/backTop/BackTop'
import { BACK_POSITION } from 'common/const'

export const itemListenerMixin = {
  data () {
    return {
      itemImglistener: null,
      newRefresh: null
    }
  },
  mounted () {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImglistener = () => {
      this.newRefresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImglistener)
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data () {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backTop () {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    listenShow (position) {
      this.isShowBackTop = - position.y > BACK_POSITION
    }
  }
}