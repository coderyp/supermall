import {
  ADD_COUNT,
  ADD_TO_CART
} from './mutation-types'

export default {
  [ADD_TO_CART] (state, payload) {
    state.productList.push(payload)
  },
  [ADD_COUNT] (state, payload) {
    payload.count ++
  },
  changeChecked (state, payload) {
    let pro = state.productList.find(product => {
      return product.iid === payload.iid
    })
    pro.checked = !pro.checked
  },
  selectAll (state, payload) {
    if (payload) {
      state.productList.map(item => item.checked = false)
    } else {
      state.productList.map(item => item.checked = true)
    }
  }
}