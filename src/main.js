import Vue from 'vue'
import App from './App'
import router from './router'

import VueResource from 'vue-resource'
Vue.use(VueResource)

// css reset  css初始化
import './styles/common.css'
// 引入mui的css文件
import './libs/mui/css/mui.css'
// 引入mui扩展字体的css文件
import './libs/mui/css/icons-extra.css'

// 1.导入mint-ui和其样式文件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 2.安装mint-ui(全局注册所有的组件)
Vue.use(MintUI)

// require('./config') // 表示引入config目录下的 : index.js index.json index.node index

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // render函数的作用是将APP组件替换掉#app盒子
  render: h => h(App) 
})
