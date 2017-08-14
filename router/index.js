import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: require('@/view/Index')
    },
    {
      path: '/follow',
      name: 'Follow',
      component: require('@/view/follow')
    },
    {
      path: '/works',
      component: require('@/view/works')
    }
  ]
})
export default router
