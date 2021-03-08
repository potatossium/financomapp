import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import echarts from 'echarts'

Vue.use(ElementUI)
Vue.use(Antd)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
