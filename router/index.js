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
      path: '/message',
      name: 'Message',
      component: require('@/view/message')
    },
    {
      path: '/search',
      name: 'Search',
      component: require('@/view/search')
    },
    {
      path: '/comment',
      name: 'Comment',
      component: require('@/view/comment')
    },
    {
      path: '/detail',
      name: 'Detail',
      component: require('@/view/detail')
    },
    {
      path: '/works',
      component: require('@/view/works')
    }
  ]
})
export default router
