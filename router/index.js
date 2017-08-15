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
      path: '/article',
      name: 'Article',
      component: require('@/view/article')
    },
    {
      path: '/works',
      component: require('@/view/works')
    },
    {
      path: '/preview',
      component: require('@/view/preview')
    },
    {
      path: '/reg',
      component: require('@/view/reg')
    },
    {
      path: '/login',
      component: require('@/view/login')
    },
    {
      path: '/resetpwd',
      component: require('@/view/resetpwd')
    },
    {
      path: '/personal',
      component: require('@/view/personal')
    }
  ]
})
export default router
