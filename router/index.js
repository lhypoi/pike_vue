import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: require('@/components/Hello')
    },
    {
      path: '/works',
      component: require('@/view/works')
    }
  ]
})
export default router
