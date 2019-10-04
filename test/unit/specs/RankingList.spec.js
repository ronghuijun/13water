import Vue from 'vue'
import RankingList from '@/components/RankingList'

describe('RankingList.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(RankingList)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.bg .username').textContent)
      .toEqual('用户名')
      expect(vm.$el.querySelector('.bg .userscore').textContent)
      .toEqual('得分')
  })
})
