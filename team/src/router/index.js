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
      path: '/list',
      name: 'List',
      component: require('@/view/common/list')
    },
    {
      path: '/notice',
      name: 'Notice',
      component: require('@/view/common/notice')
    },
    {
      path: '/comment',
      name: 'Comment',
      component: require('@/view/common/comment')
    },
    {
      path: '/login',
      name: 'Login',
      component: require('@/view/Login')
    },
    {
      path: '/personal/:uid',
      name: 'Personal',
      component: require('@/view/personal')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path.indexOf('personal') > 0) {
    if (localStorage.getItem('uid') > 0) {
      next()
    } else {
      router.push('/login')
    }
  } else {
    next()
  }
})
export default router
