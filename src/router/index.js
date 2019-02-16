import Vue from 'vue'
import Router from 'vue-router'
// @就是src目录
// import HelloWorld from '@/components/HelloWorld'
import homeComponent from '../pages/home'
import memberComponent from '../pages/member'
import shopcarComponent from '../pages/shopcar'
import searchComponent from '../pages/search'
import newsListComponent from '../pages/newsList'
import newsInfoComponent from '../pages/newsInfo'
import photoListComponent from '../pages/photoList'
import photoInfoComponent from '../pages/photoInfo'
import goodsListComponent from '../pages/goodsList'
import goodsInfoComponent from '../pages/goodsInfo'
import goodsDescComponent from '../pages/goodsDesc'
import goodsCommentComponent from '../pages/goodsComment'

Vue.use(Router)

export default new Router({
  routes: [ // 路由的匹配规则
    { path: '/', redirect: '/home' },
    { path: '/home', component: homeComponent },
    { path: '/member', component: memberComponent },
    { path: '/shopcar', component: shopcarComponent },
    { path: '/search', component: searchComponent },
    { path: '/home/newsList', component: newsListComponent },
    { path: '/home/newsInfo/:id', component: newsInfoComponent },
    { path: '/home/photoList', component: photoListComponent },
    { path: '/home/photoInfo/:id', component: photoInfoComponent },
    { path: '/home/goodsList', component: goodsListComponent },
    { path: '/home/goodsInfo/:id', component: goodsInfoComponent },
    { path: '/home/goodsDesc/:id', component: goodsDescComponent },
    { path: '/home/goodsComment/:id', component: goodsCommentComponent },
    // {
    //   // 当用户访问 / 目录时  会在App.vue的router-view组件的地方显示HelloWorld组件
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ],
  linkActiveClass: 'mui-active' // 类库
})
