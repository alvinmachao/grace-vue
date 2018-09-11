// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.js'
import App from './index.vue'
import store from '../../_store'
import '../../_common/common'

// 初始化路由
/* eslint-disable no-new */
const router = new VueRouter(routes)

// 置入组件
Vue.use(VueRouter)
new Vue({
  /**
   * 提供的元素只能作为挂载点。
   * 不同于 Vue 1.x，所有的挂载元素会被 Vue 生成的 DOM 替换。
   * 因此不推荐挂载root实例到 <html> 或者 <body> 上。
   */
  el: '#app',
  template: '<App/>',
  components: { App },
  /**
   * 置入路由
   */
  router,
  store
})
/* eslint-enable no-new */
