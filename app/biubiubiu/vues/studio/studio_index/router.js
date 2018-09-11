module.exports = {
  routes: [{
    path: '/',
    component: () => import('./components/studio_index.vue')
  }, {
    path: '*',
    redirect: '/'
  }]
}
