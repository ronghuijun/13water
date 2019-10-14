import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '@/components/UserLogin'
import BeginView from '@/components/BeginView'
import RankingList from '@/components/RankingList'
import CardShowView from '@/components/CardShowView'
import HistoryList from '@/components/HistoryList'


Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserLogin',
      component: UserLogin
    },
    {
      path: '/BeginView',
      name: 'BeginView',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: BeginView
    },
    {
      path: '/RankingList',
      name: 'RankingList',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: RankingList
    },
    {
      path: '/CardShowView',
      name: 'CardShowView',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: CardShowView
    },
    {
      path: '/HistoryList',
      name: 'HistoryList',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: HistoryList
    }
  ]
})
