import Vue from 'vue'
import Router from 'vue-router'
import Index from '../../views/physical/index/Index.vue'
import Console from '../../views/physical/Console.vue'
import Users from '../../views/physical/Users.vue'
import Articles from '../../views/physical/Articles.vue'
import Echarts from '../../views/physical/Echarts.vue'
import Login from '../../views/physical/login/Login.vue'
import NotFound from '../../views/physical/NotFound.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/apply-list',
      component: () => import('@/views/physical/user-apply/apply-list/index')
    },
    {
      path: '/index',
      component: Index,
      redirect: '/console',
      children: [
        {
          path: '/user-manage/user-exam',
          component: () => import('@/views/physical/exam-manage/user-exam/index')
        },
        {
          path: '/user-manage/user-exam-result',
          component: () => import('@/views/physical/exam-manage/exam-result/index')
        },
        {
          path: '/userList',
          name: 'user-list',
          component: () => import('@/views/physical/user-manage/user-list')
        },
        {
          path: '/console',
          name: 'console',
          component: Console
        },
        {
          path: '/users',
          name: 'users',
          component: Users
        },
        {
          path: '/articles',
          name: 'articles',
          component: Articles
        },
        {
          path: '/echarts',
          name: 'echarts',
          component: Echarts
        },
        {
          path: '/404',
          component: NotFound
        },
        {
          path: '/network-manage/Internet-connection',
          component: () => import('@/views/physical/network-manage/Internet-connection/index')
        }
      ]
    },
    {
      path: '*',
      redirect: { path: '/404' }
    }
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  const LOGINURL = '/login'
  let url, user

  url = to.path
  user = sessionStorage.getItem('user')

  if (url === LOGINURL) {
    sessionStorage.removeItem('user')
  }

  // 判断是否登录
  if (!user && url !== LOGINURL) {
    next({ path: LOGINURL })
  } else {
    next()
  }
})

export default router
