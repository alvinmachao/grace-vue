// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.js'
import App from './index.vue'
import store from '../../_store'

import '../../_common/common.js'

// 初始化路由
/* eslint-disable no-new */
const router = new VueRouter(routes)

// 置入组件
Vue.use(VueRouter)
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
/* eslint-enable no-new */
