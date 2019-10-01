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
      component: BeginView
    },
    {
      path: '/RankingList',
      name: 'RankingList',
      component: RankingList
    },
    {
      path: '/CardShowView',
      name: 'CardShowView',
      component: CardShowView
    },
    {
      path: '/HistoryList',
      name: 'HistoryList',
      component: HistoryList
    }
  ]
})
