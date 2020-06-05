export default {
  getTotal (state) {
    let len = state.productList.length    
    return len    
  },
  getList (state) {
    return state.productList
  },
  totalPrice (state) {
    return state.productList.filter(item => item.checked).reduce( (previousVal, n) => {
      return previousVal + parseFloat((n.count * n.price))
    }, 0).toFixed(2)
  },
  getCount(state) {
    return state.productList.filter(item => item.checked).reduce((previousVal, n) => {
      return previousVal + n.count
    }, 0)
  },
  isSelectAll(state) {
    if(state.productList.length === 0) {return false}
    return !(state.productList.find( item => !item.checked))
  }
}