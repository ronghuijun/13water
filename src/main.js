// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import axios from 'axios'
import store from './store'
Vue.config.productionTip = false
Vue.config.debug = true

Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
axios.interceptors.request.use(
  config => {
    if (
      config.url === 'https://api.shisanshui.rtxux.xyz/auth/login' ||
      config.url === 'https://api.shisanshui.rtxux.xyz/auth/login'
    ) {
      //如果是登录和注册操作，则不需要携带header里面的token
    } else {
      if (localStorage.getItem('Authorization')) {
        config.headers['X-Auth-Token'] = localStorage.getItem('Authorization')
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
//异步请求后，判断token是否过期
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          localStorage.removeItem('Authorization')
          this.$router.push('/')
      }
    }
  }
)

//异步请求前判断请求的连接是否需要token
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next()
  } else {
    let token = localStorage.getItem('Authorization')
    console.log('我是浏览器本地缓存的token: ' + token)
    if (token === 'null' || token === '') {
      next('/')
    } else {
      next()
    }
  }
})
