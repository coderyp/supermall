import {request} from './request'
export function getDetail (iid) {
  return request ({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request ({
    url: '/recommend'
  })
}

export class Good {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.services = services
    this.columns = columns
    this.lowPrice = itemInfo.lowPrice
  }
}

export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.shopName = shopInfo.name
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

export class GoodsParam {
  constructor (info, rule) {
    this.sizes = rule.tables
    this.info = info.set
  }
}