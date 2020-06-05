<template>
  <div class="category">
    <nav-bar class="category-nav"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <scroll  class="menu"  :probe-type="3"  @scroll="scroll" >
        <category-menu :categories="categories" @menuclick="menuClick"/>
      </scroll>
      <scroll class="good-list" :probe-type="3" ref="scroll" >
        <category-content @itemLoad="contentLoad"
                          :subcategories="categoryData[currentIndex].subcategories"
                          :categoryDetail="categoryData[currentIndex].categoryDetail"/>
      </scroll>
    </div>
    <back-top v-show="isShowBackTop" @click.native="backTop"/>
  </div>
</template>
<script>

import CategoryMenu from './childCpns/CategoryMenu'
import CategoryContent from './childCpns/CategoryContent'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'


import { getCategory, getSubcategory, getCategoryDetail } from 'network/category.js'

import { itemListenerMixin, backTopMixin } from 'common/mixin'
import { debounce } from 'common/utils'

export default {
  name: 'Category',
  components: {
    CategoryMenu,
    CategoryContent,
    NavBar,
    Scroll
  },
  data () {
    return {
      categories: [],
      categoryData: {},
      currentIndex: 0,
      refresh: null
    }
  },
  mixins: [itemListenerMixin, backTopMixin],
  created () {
    this._getCategory()
  },
  monuted () {
  },
  methods: {
    _getCategory () {
      getCategory().then(res => {
        const categories = res.data.category.list;
        // // 初始化每个类别的子数据
        const categoryData = {}
        for (let i = 0; i < categories.length; i++) {
          categoryData[i] = {
            subcategories: [],
            categoryDetail: []
          }
        }
        this.categories = categories
        this.categoryData = categoryData

        // // 请求第一个类别的数据
        this._getSubcategory(0)

        // // 请求第一个类别的详情数据
        this._getCategoryDetail(0)
      })
    },
    scroll (position) {
      // console.log(position)
      // this.listenShow(position)
    },
    _getSubcategory (currentIndex) {
      // 1.获取对应的maitkey
      const maitkey = this.categories[currentIndex].maitKey;

      // 2.请求的数据
      getSubcategory(maitkey).then(res => {
        const tempCategoryData = this.categoryData;
        tempCategoryData[currentIndex].subcategories = res.data.list;
        this.categoryData = tempCategoryData  
      })
    },
    _getCategoryDetail (currentIndex) {
      // 1.获取对应的miniWallKey
      const miniWallKey = this.categories[currentIndex].miniWallkey;

      // 2.请求数据类别的数据
      this._getRealCategoryDetail(currentIndex, miniWallKey, 'pop');
      // this._getRealCategoryDetail(currentIndex, miniWallKey, 'new');
      // this._getRealCategoryDetail(currentIndex, miniWallKey, 'sell');
    },
    _getRealCategoryDetail (index, miniWallKey, type) {
      getCategoryDetail(miniWallKey, type).then(res => {
        // 1.获取categoryData
        const categoryData = this.categoryData;

        // 2.修改数据
        categoryData[index].categoryDetail = res;

        // 3.修改data中的数据
        this.categoryData = categoryData
      })
    },
    menuClick (index) {
      // 1.改变当前的currentIndex
      const currentIndex = index;
      this.currentIndex = index

      // 2.请求对应currentIndex的数据
      this._getSubcategory(currentIndex);

      // 3.请求对应的currentIndex的详情数据
      this._getCategoryDetail(currentIndex)
    },
    contentLoad () {
    }
  }
}

</script>
<style scoped>
  .category {
    height: 100vh;
  }

  .category-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .content {
    height: calc(100% - 44px - 49px);
    display: flex;
  }
  
  .content .menu {
    flex: 3;
  }

  .content .good-list {
    flex: 7;
  }
</style>
