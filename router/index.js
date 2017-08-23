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
      path: '/skills',
      name: 'Skills',
      component: require('@/view/skills')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: require('@/view/cart')
    },
    {
      path: '/order',
      name: 'Order',
      component: require('@/view/order')
    },
    {
      path: '/goods_list',
      component: require('@/view/goods_list')
    },
    {
      path: '/goods_detail',
      component: require('@/view/goods_de')
    },
    {
      path: '/works',
      component: require('@/view/works')
    },
    {
      path: '/works/:classify',
      component: require('@/view/works')
    },
    {
      path: '/classify',
      component: require('@/view/classify')
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
      path: '/personal/:uid',
      component: require('@/view/personal')
    }
  ]
})
export default router
