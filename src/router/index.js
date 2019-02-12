import Vue from 'vue'
import Router from 'vue-router'
// @就是src目录
// import HelloWorld from '@/components/HelloWorld'
import homeComponent from '../pages/home'
import memberComponent from '../pages/member'
import shopcarComponent from '../pages/shopcar'
import searchComponent from '../pages/search'

Vue.use(Router)

export default new Router({
  routes: [ // 路由的匹配规则
    { path: '/', redirect: '/home' },
    { path: '/home', component: homeComponent },
    { path: '/member', component: memberComponent },
    { path: '/shopcar', component: shopcarComponent },
    { path: '/search', component: searchComponent },
    // {
    //   // 当用户访问 / 目录时  会在App.vue的router-view组件的地方显示HelloWorld组件
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ],
  linkActiveClass: 'mui-active' // 类库
})
