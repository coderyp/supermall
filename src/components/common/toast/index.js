import Toast from './Toast'

const obj = {}

obj.install = function(Vue) {
  // 1.创建组件构造器
  let toastConstructor = Vue.extend(Toast)
  // 2.手动创建组件对象
  let toast = new toastConstructor()
  // 3.将组件对象挂载到创建出来的div上
  toast.$mount(document.createElement('div'))
  // 4.将toast对象挂载的div追加到body上
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}
export default obj