module.exports = {
  routes: [{
    path: '/',
    component: () => import('./components/main_index.vue')
  }, {
    path: '*',
    redirect: '/'
  }]
}
