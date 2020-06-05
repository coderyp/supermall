import {
  ADD_COUNT,
  ADD_TO_CART
} from './mutation-types'

export default {
  addCart (context, payload) {
    return new Promise((resolve, reject) => {
      // 查找之前数组中是否有该商品
        let oldProduct = context.state.productList.find( item => {
          return item.iid === payload.iid
        })
        if (oldProduct) {
          context.commit(ADD_COUNT, oldProduct)
          resolve('当前商品数量+1')
        } else {
          payload.count = 1
          payload.checked = true
          context.commit(ADD_TO_CART, payload)
          resolve('加入商品至购物车')
        }
      })
    }
    
}