import Vue from 'vue'
import App from './App'
import router from './router'

import VueResource from 'vue-resource'
Vue.use(VueResource)

// 设置vue-resource的请求根路径
Vue.http.options.root = 'http://www.lovegf.cn:8899/api/';

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

import moment from 'moment'

// 定义全局过滤器
Vue.filter('dateFormat', function (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dateStr).format(pattern)
})

// 全局注册组件
import comment from './components/comment.vue'
Vue.component('comment', comment)

import swiper from './components/swiper.vue'
Vue.component('swiper', swiper)

// 安装vue-pic-preview
import VuePreview from 'vue-pic-preview'
Vue.use(VuePreview)

// 安装Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 页面刚加载时读取
// 只要修改了数据就要保存
let car = JSON.parse(localStorage.getItem('car') || '[]')

let store = new Vuex.Store({
  state: {
    car // {id, price, count, selected}
  },
  mutations: {
    addToCar(state, goodsInfo) {
      // 加入购物车的业务逻辑:
      // 1. 即将要加入的商品是否在购物车已存在, 
      // 2. 如果存在只需要更新数量信息即可
      // 3. 如果不存在只需要push进car数组即可

      // 假设法
      // let flag = false
      // state.car.some(item => {
      //   if (item.id === goodsInfo.id) {
      //     item.count += parseInt(goodsInfo.count)
      //     // 当前要加入购物车的商品已存在于car中
      //     return flag = true
      //   }
      // })
      // // false表示没找到  在购物车中没有这个商品信息
      // if (!flag) {
      //   state.car.push(goodsInfo)
      // }

      // some forEach every filter findIndex
      // findIndex的作用是用来根据条件查找索引
      // 如果goodsInfo在car中存在, 就会返回goodsInfo的索引
      // 如果不存在返回-1
      // let index = state.car.findIndex(item => {
      //   if (item.id === goodsInfo.id) {
      //     return true
      //   }
      // })

      // 不使用假设法
      let index = state.car.findIndex(item => item.id === goodsInfo.id)
      if (index === -1) {
        // 表示没找到  不存在于购物车中
        state.car.push(goodsInfo)
      } else {
        // 表示找到了  确实在购物车中已经有该商品了
        state.car[index].count += parseInt(goodsInfo.count)
      }

      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    totalCount(state) {
      let sum = 0
      state.car.forEach(item => sum += item.count)
      return sum
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 和router一样 挂载到vm实例上
  // render函数的作用是将APP组件替换掉#app盒子
  render: h => h(App)
})
