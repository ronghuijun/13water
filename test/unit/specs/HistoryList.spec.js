import Vue from 'vue'
import HistoryList from '@/components/HistoryList'


describe('HistoryList.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HistoryList)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.loginbg .buttons img').src)
      .toBe('http://localhost/assets/ReturnGame.png')
   
  })
})
