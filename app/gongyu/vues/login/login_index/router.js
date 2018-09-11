module.exports = {
  routes: [{
    path: '/',
    component: () => import('./components/login_index.vue')
  }, {
    path: '*',
    redirect: '/'
  }]
}
