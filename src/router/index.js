import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // 页面加载进度条
import 'nprogress/nprogress.css'

Vue.use(Router)

const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/ErrorPage')
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    name: '首页',
    icon: 'home',
    component: () => import('@/views/Home')
  }
]

export const asyncRoutes = [
  ...constantRoutes,
  {
    path: '/svgIcon',
    name: 'svg图标',
    icon: '',
    component: () => import('@/views/IconView')
  },
  {
    path: '/computedAndWatch',
    name: '计算与侦听',
    icon: '',
    component: () => import('@/views/ComputedWatch')
  },
  {
    path: '/directives',
    name: '自定义指令',
    icon: '',
    component: () => import('@/views/MyDirective')
  },
  {
    path: '/filters',
    name: '过滤器',
    icon: '',
    component: () => import('@/views/MyFilter')
  },
  {
    path: '/vuex',
    name: 'Vuex',
    icon: '',
    component: () => import('@/views/VuexView')
  }
]

const router = new Router({
  routes: asyncRoutes
})

// 导航首位，可在此做路由权限过滤
router.beforeEach((to, form, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
