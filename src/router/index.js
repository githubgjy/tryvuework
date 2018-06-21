import Vue from 'vue'
import Router from 'vue-router'

/*按需加载（不是首页加载后全部加载出来，这样的话，首页加载的速度很慢）*/
const index = r => require.ensure([], () => r(require('@/components/index/index.vue')), 'index')
const login = r => require.ensure([], () => r(require('@/components/login/login.vue')), 'login')
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    //地址为空时跳转index页面   就是地址栏为空时的站位图片，有利于整个网站的交互体验，不然的话，页面地址栏中的数据不是很友好的话，整个的页面体验度不是很好
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    // 登录
    {
      path: '/login',
      component: login
    }
  ]
})
