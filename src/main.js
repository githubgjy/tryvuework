// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/*路由*/
import router from './router'
/*引入图片懒加载*/
import VueLazyload from 'vue-lazyload'
/*生产模式*/
Vue.config.productionTip = false
// 将全局样式文件写在 main.js
import '@/assets/scss/reset.scss'
/*这个是注册到根示例的方法*/
import store from './store'

import FastClick from 'fastclick'
/*判断是否存在，然后做FastClick.attach(document.body)应用*/
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}
// Mint UI
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

// 图片懒加载

Vue.use(VueLazyload, {
  loading: '/static/imglazyload/loading-bars.svg'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
